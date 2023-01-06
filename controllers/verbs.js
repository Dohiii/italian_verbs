const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")


const pingVerbs = async (req, res) => {
    res.status(StatusCodes.OK).json({ "pong": "pong" })
}


const getAllVerbsPublic = async (req, res) => {
    const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
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











    // const generateVerb = async (verbs) => {
    //     let filteredVerb = []
    //     const getRandomElementFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

    //     console.log(allVerbs)

    //     // form an object
    //     verbs.forEach(verb => {
    //         verb.osoba.forEach(osoba => {
    //             if (osoba.category === categoria && tenseArr.includes(osoba.tense)) {
    //                 osoba.czasownik = verb.czasownik
    //                 osoba.tlumaczenie = verb.tlumaczenie
    //                 osoba.zwrotne = verb.zwrotne
    //                 filteredVerb.push(osoba)
    //             }
    //         })
    //     });

    //     let getRandomOsobe = getRandomElementFromArray(osobaArr)

    //     let newFiltered = filteredVerb.filter(el => el[getRandomOsobe].length > 0)

    //     // console.log(filteredVerb)
    //     // console.log(newFiltered)

    //     let randomVerb = getRandomElementFromArray(newFiltered)

    //     const result = {}

    //     result.pluc = getRandomOsobe
    //     result.zwrotne = randomVerb.zwrotne
    //     result.czasownik = randomVerb.czasownik
    //     result.tlumaczenie = randomVerb.tlumaczenie
    //     result.category = randomVerb.category
    //     result.group = randomVerb.group
    //     result.tense = randomVerb.tense
    //     result.correctWord = randomVerb[getRandomOsobe]
    //     return result
    // }


    // try {
    //     let verb = await generateVerb(allVerbs)
    //     res.status(StatusCodes.OK).json({ verb: verb })
    // } catch (e) {
    //     res.status(StatusCodes.NOT_FOUND).json("No verb with such configuration")
    // }

}


module.exports = { getAllVerbsPublic, pingVerbs }
