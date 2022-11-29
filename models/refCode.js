const { Schema, model } = require('mongoose')

const refCodeSchema = new Schema(
    {
        token: String,
        expirationDate: Date,
        timesUsed: Number,
    }
)

const RefCode = model('RefCodes', refCodeSchema)

module.exports = RefCode