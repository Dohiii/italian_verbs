const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")


const pingVerbs = async (req, res) => {
    res.status(StatusCodes.OK).json({ "pong": "pong" })
}


const getAllVerbsPublic = async (req, res) => {
    const { categoria, ...tense } = req.query;

    let tenseValue = tense.tense
    let osobaValue = tense.osoba
    let zwrotneValue = tense.zwrotne
    let zwrVal = false


    if (zwrotneValue === "true") {
        zwrVal = true
    }

    // tenseArr.push(...tenseValue)
    // tenseArr.push(...tenseValue)
    let tenseArr = []
    let osobaArr = []


    if (typeof tenseValue === "string") {
        tenseArr.push(tenseValue)
    }

    if (typeof tenseValue === "object") {
        tenseArr.push(...tenseValue)
    }


    if (typeof osobaValue === "string") {
        osobaArr.push(osobaValue)
    }

    if (typeof osobaValue === "object") {
        osobaArr.push(...osobaValue)
    }



    if (osobaArr.includes("LUI/LEI")) {

        let luiLei = osobaArr.pop("LUI/LEI")
        let splittedLuiLei = luiLei.split("/")
        osobaArr.push(...splittedLuiLei)
    }



    // console.log({ zwrotne: zwrVal })

    const allVerbs = await Verb.find({ zwrotne: zwrVal })

    // const allVerbs = await Verb.aggregate([
    //     { $match: { "zwrotne": zwrVal } },
    //     { $sample: { size: 1 } }
    // ])

    // console.log(allVerbs.lenght)


    const generateVerb = async (verbs) => {
        const filteredVerb = []
        const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];


        // form an object
        verbs.forEach(verb => {
            verb.osoba.forEach(osoba => {
                if (osoba.category === categoria && tenseArr.includes(osoba.tense)) {
                    osoba.czasownik = verb.czasownik
                    osoba.tlumaczenie = verb.tlumaczenie
                    osoba.zwrotne = verb.zwrotne
                    filteredVerb.push(osoba)
                }
            })
        });

        const randomVerb = getRandomElementFromArray(filteredVerb)




        // const pairsArr = [
        //     ["IO", randomVerb.IO],
        //     ["TU", randomVerb.TU],
        //     ["LUI", randomVerb.LUI],
        //     ["LEI", randomVerb.LEI],
        //     ["NOI", randomVerb.NOI],
        //     ["VOI", randomVerb.VOI],
        //     ["LORO", randomVerb.LORO],
        // ]

        const getRandomOsobe = await getRandomElementFromArray(osobaArr)

        const result = {}

        result.pluc = getRandomOsobe
        result.zwrotne = randomVerb.zwrotne
        result.czasownik = randomVerb.czasownik
        result.tlumaczenie = randomVerb.tlumaczenie
        result.category = randomVerb.category
        result.group = randomVerb.group
        result.tense = randomVerb.tense
        result.correctWord = randomVerb[getRandomOsobe]

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
