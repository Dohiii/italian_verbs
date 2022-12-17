const Verb = require("../models/Verb")
const { StatusCodes } = require("http-status-codes")


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

    const filteredVerb = []

    // form an object
    allVerbs.forEach(verb => {
        verb.osoba.forEach(osoba => {
            if (osoba.category === categoria && tenseArr.includes(osoba.tense)) {
                filteredVerb.push(osoba)
            }
        })
    });





    // const queryObject = {}

    // console.log(categoria)
    // console.log(categoria)

    // if (categoria) {
    //     queryObject.categoria = categoria
    // }

    // Get filtered werbs and get only one random
    const randomVerv = await Verb.aggregate([
        // {
        //     $match: queryObject,

        // },
        { $sample: { size: 1 } }
    ]);

    // tenses
    // const tenseArr = tense.tense
    // const verbsObject = randomVerv[0]

    // // modify object and delete all tenses that is unchecked
    // Object.keys(verbsObject.osoba).forEach((key) => tenseArr.includes(key) || delete verbsObject.osoba[key]);

    // // get random osobe key pair.
    // // function to convert object into array
    // const objToArr = (obj) => Object.keys(obj).map((key) => [key, obj[key]])
    // // function to get random value from array
    // const getRandomPair = (arr) => arr[Math.floor(Math.random() * arr.length)];


    // //convert osoba object into array
    // const osobaArr = objToArr(verbsObject.osoba)
    // // get random item from that array
    // const randomPair = getRandomPair(osobaArr)
    // // split array into 2 values, name of Tense and pair of Pluć and Correct word
    // const [tenseChosen, objectTense] = randomPair
    // // do the same with Pair
    // const objectTenseArr = objToArr(objectTense)
    // const verbTenseWordPair = getRandomPair(objectTenseArr)


    // // creating object that we will return
    // const finalVerb = {
    //     czasownik: verbsObject.czasownik,
    //     tlumaczenie: verbsObject.tlumaczenie,
    //     categoria: verbsObject.categoria,
    //     tenseChosen: tenseChosen,
    //     pluć: verbTenseWordPair[0],
    //     correctWord: verbTenseWordPair[1]
    // }

    res.status(StatusCodes.OK).json({ filteredVerb })
}


module.exports = getAllVerbsPublic
