const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")


const getAllVerbsPublic = async (req, res) => {
    const { categoria, ...tense } = req.query;
    const queryObject = {}

    if (categoria) {
        queryObject.categoria = categoria
    }

    const verbs = await Verb.find(queryObject).sort("-createdAt").skip(0).limit(2)


    // random verb 

    console.log(tense)

    // tenses



    res.status(StatusCodes.OK).json({ count: verbs.length, verbs })
}





// const getAllVerbsPublic = async (req, res) => {
//     const { categoria } = req.query;
//     const queryObject = {}

//     if (categoria) {
//         queryObject.categoria = categoria
//     }

//     const verbs = await Verb.find(queryObject).sort("-createdAt")
//     res.status(StatusCodes.OK).json({ count: verbs.length, verbs })
// }


// const getAllVerbsPublic = async (req, res) => {
//     const verbs = await Verb.find({}).sort("-createdAt")
//     res.status(StatusCodes.OK).json({ count: verbs.length, verbs })
// }








module.exports = getAllVerbsPublic
