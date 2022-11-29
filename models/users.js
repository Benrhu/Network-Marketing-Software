const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
            firstname: String,
            lastname: String,
            email: String,
            passwordHash: String,
            refCode: {
                type: Schema.Types.ObjectId,
                ref: "RefCode"
            },
            sales: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Sales'
                }
            ],
            upLine: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'UpLine'
                }
            ],
            downLine: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'DownLine'
                }
            ],
            newLeads: Number,
            closedLeads: Number,
            benefits: Number,
            userId: String
    }
)

userSchema.set('toJSON', {
    transform: (docuemnt, returnedObject) => {
        returnedObject.userId = returnedObject._userId
    }
})

const User = model('Users', userSchema)

module.exports = User