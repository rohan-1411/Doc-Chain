const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let companySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    code:{
        type: String,
        required: true,
        unique:true
    },    
    password: {
        type: String,
        required: true
    }
}, {
    collection: 'company'
})

module.exports = mongoose.model('Company', companySchema)