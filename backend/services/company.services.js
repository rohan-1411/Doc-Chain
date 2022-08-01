let Company = require('../models/company.model');
let Candidate = require('../models/candidates.model');

const loginCompany = async (code, password) => {
    const data = await Company.findOne({ code: code });
    if (data) {
        if (data.password == password) {
            return 'Success';
        } else {
            return 'Fail';
        }
    } else {
        return 'Error';
    }
}

const registerCompany = async (name, email, code, password) => {
    try {
        const data = await Company.findOne({ code: code });
        if(data) {
            return 'Company Already Exists';        
        }
        const user = {
            name: name,
            email: email,
            code: code,
            password: password,
        }
        const newRecord = new Company(user);
        await newRecord.save();
        return 'Success';
    } catch(e) {
        return 'Error';
    }
}

const getCompany = async (code) => {
    try {
        const data = await Company.findOne({ code: code });
        if(data) {
            return data;       
        }
    } catch(e) {
        return 'Error';
    }
}

const getAllApplications = async () => {
    try {
        const data = await Candidate.find({ });
        if(data) {
            return data;       
        }
    } catch(e) {
        return 'Error';
    }
}

module.exports = { loginCompany, registerCompany, getCompany, getAllApplications }