const mongoose = require("mongoose")

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
    zwrotne: {
        type: Boolean
    },
    osoba: {
        type: Array
    },
    // createdBy: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    //     required: [true, 'Please provide an user']
    // }
}, { timestamps: true })

module.exports = mongoose.model('Verb', VerbShcema)
