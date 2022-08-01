const StudentService = require('../services/students.services');
const { updateAsset, getTransactionData, submitTransaction } = require('../src/create');
const functions  = require('../utils');
const formidable = require("formidable");
let s;

const loginStud = async (req, res) => {
    try {
        let result = await StudentService.loginStud(req.body.uid, req.body.password)
        if(result == 'Success') {
            let ins = await StudentService.getStudentInfo(req.body.uid);
            req.session.uid = ins.uid;
            req.session.name = ins.name;
            console.log(req.session)
            s = req.session;
            return res.end('Login Success');
        } else {
            return res.end('Login Failed');
        }
    } catch(e) {
        console.log(e);
        return res.end('Error while login');
    }
}

const getStudent = async (req, res) => {
    try {
        let students = await StudentService.getStudent({inst_code: req.params.code})
        console.log(students)
        return res.status(200).json(students);
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

const uploadCertificate = async (req, res) => {
    try {
        console.log('uploadCertificate')
        let uid = req.params.slug;
        console.log(uid)
        if(uid) {
            console.log('Inside');
            if(req.files.image) {
                hash = await functions.addOneFileToIPFS(req.files.image);
                await updateAsset(uid, hash);
                console.log('updated!!!')
                return res.status(200).end('updated');
            }
            // const form = new formidable.IncomingForm();
            // form.parse(req, async (err, fields, files) => {
            //     console.log('form parse')
            //     if (err) {
            //         console.log("Error parsing the files");
            //         return res.status(400).json({
            //             status: "Fail",
            //             message: "There was an error parsing the files",
            //             error: err,
            //         });
            //     } else {
            //         hash = await functions.addOneFileToIPFS(files.image.filepath);
            //         await updateAsset(uid, hash);
            //         console.log('updated!!!')
            //         return res.status(200).end('updated')
            //     }
            // });
        }
    } catch(e) {
        throw Error('Unable To Upload Certificate');
    }
}

const viewCertificate = async (req, res) => {
    try {
        let uid = req.params.slug;
        if(uid) {
            blockData = await getTransactionData(uid);
            url = await functions.getFileFromIPFS(blockData.degree_certificate);
            return res.end(url);
        }
    } catch(e) {
        return res.end('Unable To Fetch Certificate');
    }
}

const addStudent = async (req, res) => {
    try {
        console.log(req.body)
        let result = await StudentService.addStudent(req.body)
        await submitTransaction(req.body.uid, req.body.name, req.body.institute, 'B.Tech', '');
        console.log('transaction created');
        return res.end('yes')
    } catch(e) {
        return res.end('Unable To Add Student');
    }
}

const initialStudentDashboard = async (req, res) => {
    const data = {
        uid: s.uid,
        name: s.name
    }
    return res.json({data: data});
}

const getStudentInfo = async (req, res) => {
    try {
        let students = await StudentService.getStudentInfo(req.params.uid)
        console.log(students);
        return res.status(200).json(students);
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

module.exports = { loginStud, getStudent, uploadCertificate, viewCertificate, addStudent, getStudentInfo, initialStudentDashboard }