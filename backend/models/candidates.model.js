const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CandidateSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    job_id: {
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: true,
    },    
    document: {
        type: String,
        required: true
    },
    result: {
        type: String
    },
    company_code: {
        type: String
    }
}, {
    collection: 'candidate'
})

module.exports = mongoose.model('Candidate', CandidateSchema)