let Company = require('../models/company.model');
const CompanyService = require('../services/company.services');

const pdfParse = require("pdf-parse");
const formidable = require("formidable");
const { searchAsset, getTransactionData } = require('../src/create');
const { decrypt, onlyHashAdd } = require('../utils');

let s;
const loginCompany = async (req, res) => {
    try {
        let result = await CompanyService.loginCompany(req.body.code, req.body.password)
        if(result == 'Success') {
            let ins = await CompanyService.getCompany(req.body.code);
            if(ins != 'Error') {
                req.session.institute = ins.name;
                req.session.code = req.body.code;
                console.log(req.session)
                s = req.session;
                return res.end('Login Success');
            }
        } else {
            return res.end('Login Failed');
        }
    } catch(e) {
        console.log(e);
        return res.end('Error while login');
    }
}

const registerCompany = async (req, res) => {
    try {
        let result = await CompanyService.registerCompany(req.body.name, req.body.email, req.body.code, req.body.password)
        if(result == 'Success') {
            return res.end('Sign Up Success');
        } else {
            return res.end('Sign Up Failed ' + result);
        }
    } catch(e) {
        console.log(e);
        return res.end('Error while signup');
    }
}

const verifyDocument = async (req, res) => {
    try {
        if (!req.files && !req.files.document) {
            res.status(400);
            res.end();
        }
    
        await pdfParse(req.files.document).then(
            response => {
                return response.text
            }
        )
        .then(extractedText => {
            let number = "Number:";
            let clgname="HSE-1HSS-12O21020";
            let sentence = extractedText;
            text=(sentence.split(number)[1].split(" ")[1].split("Programme")[0]);
            text2=(sentence.split(clgname)[1].split(/\n/)[1].split("Grade")[0]);
            
        });

        text = text.trim();
        let doesExists = await searchAsset(text);
        if(doesExists) {
            record = await getTransactionData(text);
            encryptedHash = record.degree_certificate;
            decryptedHash = decrypt(encryptedHash);
            console.log('Decrypted hash (from blockchain): ' + decryptedHash);
            console.log(req.files.document.data);

            recentHash = await onlyHashAdd(req.files.document);
            console.log('Hash of document uploaded by company: ' + recentHash);

            if(recentHash == decryptedHash) {
                return res.end('Verified');
            } else {
                return res.end('Not Verified');
            }
        } else {
            return res.end('Record Does Not Exists');
        }
    } catch(e) {
        console.log(e);
        return res.end('Error while verification');
    }
}

const getAllApplications = async (req, res) => {
    try {
        let result = await CompanyService.getAllApplications();
        if(result != 'Error') {
            return res.json(result);
        } else {
            return res.end('Error');
        }
    } catch(e) {
        console.log(e);
        return res.end('Error');
    }
}

const initialCompanyDashboard = async (req, res) => {
    console.log('hehehehe');
    console.log(s)
    const data = {
        name: s.institute,
        code: s.code
    }

    console.log(data)
    return res.json({data: data});
}

module.exports = { loginCompany, registerCompany, verifyDocument, getAllApplications, initialCompanyDashboard }