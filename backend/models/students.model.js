const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    uid: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    institute: {
        type: String
    },
    inst_code: {
        type: String
    },
    class: {
        type: String
    },
    department: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    postal_code: {
        type: String
    },
    country: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'students2'
})

module.exports = mongoose.model('Students', studentSchema)