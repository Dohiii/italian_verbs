const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")


const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];


const pingVerbs = async (req, res) => {
    res.status(StatusCodes.OK).json({ "pong": "pong" })
}


const getSingleVerb = async (req, res) => {
    const { categoria, ...tense } = req.query;
    let tenseValue = tense.tense
    let tenseArr = []
    let filteredVerb = []
    let zwrotneValue = tense.zwrotne
    let zwrVal = false


    if (zwrotneValue === "true") {
        zwrVal = true
    }

    if (typeof tenseValue === "string") {
        tenseArr.push(tenseValue)
    }

    if (typeof tenseValue === "object") {
        tenseArr.push(...tenseValue)
    }

    const allVerbs = await Verb.find({ zwrotne: zwrVal })
    const randomTense = getRandomElementFromArray(tenseArr)

    allVerbs.forEach(verb => {
        verb.osoba.forEach(osoba => {
            if (osoba.category === categoria && osoba.tense === randomTense) {
                osoba.czasownik = verb.czasownik
                osoba.tlumaczenie = verb.tlumaczenie
                osoba.zwrotne = verb.zwrotne
                filteredVerb.push(osoba)
            }
        })
    });

    const verb = getRandomElementFromArray(filteredVerb)


    res.status(StatusCodes.OK).json({ verb })
}




const getAllVerbsPublic = async (req, res) => {
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    const { categoria, ...tense } = req.query;
    let tenseValue = tense.tense
    let osobaValue = tense.osoba
    let zwrotneValue = tense.zwrotne
    let zwrVal = false


    if (zwrotneValue === "true") {
        zwrVal = true
    }

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


    const allVerbs = await Verb.find({ zwrotne: zwrVal })

    let randomOsobe = getRandomElementFromArray(osobaArr)
    let randomTense = getRandomElementFromArray(tenseArr)


    let filteredVerb = []

    allVerbs.forEach(verb => {
        verb.osoba.forEach(osoba => {
            if (osoba.category === categoria && osoba.tense === randomTense) {
                osoba.czasownik = verb.czasownik
                osoba.tlumaczenie = verb.tlumaczenie
                osoba.correctWord = osoba[randomOsobe]
                osoba.pluc = randomOsobe
                filteredVerb.push(osoba)
            }
        })
    });

    shuffle(filteredVerb)

    let result = filteredVerb.find(element => element[randomOsobe].length > 0)

    // let getRandomVerb = getRandomElementFromArray(filteredVerb)

    if (!result) {
        result = "no such verb"
    }
    res.status(StatusCodes.OK).json({ verb: result })
}


module.exports = { getAllVerbsPublic, pingVerbs, getSingleVerb }
