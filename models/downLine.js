const assert = require('node:assert/strict')
const { Schema, model, default: mongoose } = require('mongoose')
const User = require('./users')

const options = { discriminatorKe: 'kind' };

const DownLineUser = User.discriminator(
    'DownLines',
    new mongoose.Schema({
        downLineId: String,
        options
    })
);

const DownLine = new DownLineUser(
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
        downLineId: String
    }
);

assert.ok(DownLine.upLineId);

module.exports = DownLine;