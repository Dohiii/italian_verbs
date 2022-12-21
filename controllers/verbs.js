const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")


const pingVerbs = async (req, res) => {
    res.status(StatusCodes.OK).json({ "pong": "pong" })
}


const getAllVerbsPublic = async (req, res) => {
    const { categoria, ...tense } = req.query;

    const tenseValue = tense.tense
    const tenseArr = []

    if (typeof tenseValue === "string") {
        tenseArr.push(tenseValue)
    }
    if (typeof tenseValue === "object") {
        tenseArr.push(...tenseValue)
    }


    const allVerbs = await Verb.find({})


    const generateVerb = async (verbs) => {
        const filteredVerb = []
        const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

        // form an object
        verbs.forEach(verb => {
            verb.osoba.forEach(osoba => {
                if (osoba.category === categoria && tenseArr.includes(osoba.tense)) {
                    osoba.czasownik = verb.czasownik
                    osoba.tlumaczenie = verb.tlumaczenie
                    filteredVerb.push(osoba)
                }
            })
        });


        const randomVerb = getRandomElementFromArray(filteredVerb)

        const pairsArr = [
            ["IO", randomVerb.IO],
            ["TU", randomVerb.TU],
            ["LUI", randomVerb.LUI],
            ["LEI", randomVerb.LEI],
            ["NOI", randomVerb.NOI],
            ["VOI", randomVerb.VOI],
            ["LORO", randomVerb.LORO],
        ]

        const getRandomPair = getRandomElementFromArray(pairsArr)

        const result = {}

        result.pluc = getRandomPair[0]
        result.correctWord = getRandomPair[1]
        result.czasownik = randomVerb.czasownik
        result.tlumaczenie = randomVerb.tlumaczenie
        result.category = randomVerb.category
        result.group = randomVerb.group
        result.tense = randomVerb.tense

        return result
    }


    let verb = await generateVerb(allVerbs)

    if (verb.correctWord.length === 0) {
        console.log("it was empty")
        verb = await generateVerb(allVerbs)
    }
    res.status(StatusCodes.OK).json({ verb: verb })


}


module.exports = { getAllVerbsPublic, pingVerbs }
