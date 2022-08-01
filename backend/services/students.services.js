let Student = require('../models/students.model');


const getStudent = async (query) => {
    try {
        console.log('query: ', query)
        let students = await Student.find(query);
        return students;
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

const loginStud = async (uid, password) => {
    const data = await Student.findOne({ uid: uid });
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

const addStudent = async (record) => {
    console.log('record', record);
    const data = await Student.findOne({ uid: record.uid });
        if(data) {
            return 'Institute Already Exists';        
        }
        const newRecord = new Student(record);
        await newRecord.save();
        return 'Success';
}

const getStudentInfo = async (query) => {
    try {
        console.log(query)
        let students = await Student.findOne({uid: query});
        return students;
    } catch(e) {
        throw Error('Error While Fetching Student\'s Data');
    }
}

module.exports = { getStudent, loginStud, addStudent, getStudentInfo }