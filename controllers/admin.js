const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")
const { NotFoundError } = require("../errors")

const getAllVerbs = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const verbs = await Verb.find({ createdBy: req.user.userId })
        .sort("-createdAt").limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();



    // get total documents in the Verbs collection 
    const count = await Verb.count();


    res.status(StatusCodes.OK).json({
        count: verbs.length,
        verbs,
        totalPages: Math.ceil(count / limit),
        currentPage: page
    })
}


const getVerb = async (req, res) => {
    const { user: { userId }, params: { id: verbId } } = req
    const verb = await Verb.findOne({
        _id: verbId,
        createdBy: userId
    })

    if (!verb) {
        throw new NotFoundError(`No verb with id ${verbId}`)
    }
    res.status(StatusCodes.OK).json(verb)
}

const createVerb = async (req, res) => {
    req.body.createdBy = req.user.userId
    const verb = await Verb.create(req.body)
    res.status(StatusCodes.CREATED).json(verb)
}
const updateVerb = async (req, res) => {
    const { user: { userId }, params: { id: verbId } } = req

    const verb = await Verb.findOneAndUpdate({
        _id: verbId,
        createdBy: userId
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
    const { user: { userId }, params: { id: verbId } } = req

    const verb = await Verb.findOneAndDelete({
        _id: verbId,
        createdBy: userId
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