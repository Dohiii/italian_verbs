const mongoose = require("mongoose")

const personsObject = {
    OI: String,
    TU: String,
    LUI: String,
    LEI: String,
    NOI: String,
    VOI: String,
    LORO: String,
}



const VerbShcema = new mongoose.Schema({
    czasownik: {
        type: String,
        required: [true, 'Proszę podaj czsownik'],
        maxlength: 100,
        unique: true,
    },
    tlumaczenie: {
        type: String,
        required: [true, 'Proszę podaj tlumaczenie'],
        maxlength: 255
    },
    categoria: {
        type: String,
        enum: ["regularny", "nieregularny"],
        default: "regularny",

    },
    osoba: {
        type: Object
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide an user']
    }
}, { timestamps: true })

module.exports = mongoose.model('Verb', VerbShcema)
