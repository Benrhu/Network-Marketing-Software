const assert = require('node:assert/strict')
const { Schema, model, default: mongoose } = require('mongoose')
const User = require('./users')

const options = { discriminatorKe: 'kind' };

const UpLineUser = User.discriminator(
    'UpLines',
    new mongoose.Schema({
        upLineId: String,
        options
    })
);

const UpLine = new UpLineUser(
    {
        firstname: String,
        lastname: String,
        email: String,
        passwordHash: String,
        referralCode: {
            type: Schema.Types.ObjectId,
            ref: "RefCode"
            
        },
        sales: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Sales'
            }
        ],
        newLeads: Number,
        closedLeads: Number,
        benefits: Number,
        userId: String,
        upLineId: String
    }
);

assert.ok(UpLine.upLineId);

module.exports = UpLine;