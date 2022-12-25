const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")
const { NotFoundError } = require("../errors")


const getAllVerbs = async (req, res) => {
    const queryObject = {};
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 1250;
    const skip = (page - 1) * limit;
    const search = req.query.search || ""


    if (search) {
        queryObject.czasownik = search === 'true' ? true : false;
    }

    let result = Verb.find({ 'czasownik': { '$regex': search, '$options': 'i' } });

    result = result.skip(skip).limit(limit);

    const verbs = await result

    // get total documents in the Verbs collection 
    const count = await Verb.estimatedDocumentCount();

    res.status(StatusCodes.OK).json({
        count: verbs.length,
        verbs,
        totalPages: Math.ceil(count / limit),
        currentPage: page
    })
}


const getVerb = async (req, res) => {
    const { params: { id: czasownik } } = req

    const verb = await Verb.findOne(
        { czasownik: czasownik }
    )

    if (!verb) {
        throw new NotFoundError(`No verb with named ${czasownik}`)
    }
    if (!czasownik) {
        throw new NotFoundError(`No verb`)
    }
    res.status(StatusCodes.OK).json(verb)
}

const createVerb = async (req, res) => {
    // req.body.createdBy = req.user.userId
    req.body.createdBy = "admin"
    let verbData = req.body
    const newCzasownik = verbData.czasownik.toLowerCase();
    verbData.czasownik = newCzasownik
    const verb = await Verb.create(verbData)
    res.status(StatusCodes.CREATED).json(verb)
}


const updateVerb = async (req, res) => {
    const { params: { id: verbId } } = req

    const verb = await Verb.findOneAndUpdate({
        _id: verbId,
    }, req.body, {
        new: true,
        runValidators: true
    })

    if (!verb) {
        throw new NotFoundError(`No verb with id ${verbId}`)
    }
    res.status(StatusCodes.OK).json(verb)
}
const deleteVerb = async (req, res) => {
    const { params: { id: verbId } } = req

    const verb = await Verb.findOneAndDelete({
        _id: verbId,
    })

    if (!verb) {
        throw new NotFoundError(`No verb with id ${verbId}`)
    }
    res.status(StatusCodes.OK).json({ msg: `Verb ${verb.czasownik} was deleted` })
}


module.exports = {
    getAllVerbs,
    getVerb,
    createVerb,
    updateVerb,
    deleteVerb
}

