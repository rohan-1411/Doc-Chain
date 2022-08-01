let Institute = require('../models/institute.model');

const loginInstitute = async (code, password) => {
    const data = await Institute.findOne({ code: code });
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

const registerInstitute = async (name, email, code, password) => {
    try {
        const data = await Institute.findOne({ code: code });
        if(data) {
            return 'Institute Already Exists';        
        }
        const user = {
            name: name,
            email: email,
            code: code,
            password: password,
        }
        const newRecord = new Institute(user);
        await newRecord.save();
        return 'Success';
    } catch(e) {
        return 'Error';
    }
}

const getInstitute = async (code) => {
    try {
        const data = await Institute.findOne({ code: code });
        if(data) {
            return data;       
        }
    } catch(e) {
        return 'Error';
    }
}

module.exports = { loginInstitute, registerInstitute, getInstitute }