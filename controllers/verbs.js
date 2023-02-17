const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")
const CustomError = require('../errors')


const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

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


const postVerbPublic = async (req, res) => {
    const { category, zwrotne, osoba, tense } = req.body

    const initialState = {
        category: "",
        zwrotne: false,
        osoba: "",
        tense: ""
    }

    // working with category
    if (category.length === 0) {
        let categoryVal = getRandomElementFromArray(['regularny', 'nieregularny'])
        initialState.category = categoryVal
    }
    if (category.length === 1) {
        let categoryVal = category[0]
        initialState.category = categoryVal
    }
    if (category.length === 2) {
        let categoryVal = getRandomElementFromArray(category)
        initialState.category = categoryVal
    }

    // working with zwrotne
    if (zwrotne.length === 0) {
        let zwrotneVal = false
        initialState.zwrotne = zwrotneVal
    }
    if (zwrotne.length === 1) {
        let zwrotneVal = zwrotne[0]
        initialState.zwrotne = zwrotneVal
    }
    if (zwrotne.length === 2) {
        let zwrotneVal = getRandomElementFromArray(zwrotne)
        initialState.zwrotne = zwrotneVal
    }

    //working with osoba
    if (osoba.length === 0) {
        let osobaVal = "IO"
        initialState.osoba = osobaVal
    }
    if (osoba.length === 1) {
        let osobaVal = osoba[0]
        initialState.osoba = osobaVal
    }
    if (osoba.length >= 2) {
        let osobaVal = getRandomElementFromArray(osoba)
        initialState.osoba = osobaVal
    }
    //working with tense
    if (tense.length === 0) {
        let tenseVal = "Presente Indicativo"
        initialState.tense = tenseVal
    }
    if (tense.length === 1) {
        let tenseVal = tense[0]
        initialState.tense = tenseVal
    }
    if (tense.length >= 2) {
        let tenseVal = getRandomElementFromArray(tense)
        initialState.tense = tenseVal
    }

    const allVerbs = await Verb.find({ zwrotne: initialState.zwrotne })

    let filteredVerb = []

    allVerbs.forEach(verb => {
        verb.osoba.forEach(osoba => {
            if (osoba.category === initialState.category && osoba.tense === initialState.tense) {
                osoba.czasownik = verb.czasownik
                osoba.tlumaczenie = verb.tlumaczenie
                osoba.correctWord = osoba[initialState.osoba]
                osoba.pluc = initialState.osoba
                filteredVerb.push(osoba)
            }
        })
    });

    shuffle(filteredVerb)

    let result = filteredVerb.find(element => element[initialState.osoba].length > 0)

    // let getRandomVerb = getRandomElementFromArray(filteredVerb)

    if (!result) {
        result = "no such verb"
    }

    // if (!category || !zwrotne || !osoba || !tense) {
    //     throw new CustomError.NoElementInArray("One of the elements are missing")
    // }
    res.status(StatusCodes.OK).json({ verb: result })
}


module.exports = { getAllVerbsPublic, pingVerbs, getSingleVerb, postVerbPublic }
