const express = require('express');
const router = express.Router();

let StudentController = require('../controllers/students.controller');

router.get('/getStudentDetails/:code', StudentController.getStudent);
router.post('/uploadCertificate/:slug', StudentController.uploadCertificate);
router.post('/viewCertificate/:slug', StudentController.viewCertificate);
router.post('/loginStudent', StudentController.loginStud);
router.post('/addStudent', StudentController.addStudent);
router.post('/getStudentInfo/:uid', StudentController.getStudentInfo);
router.post('/initialStudentDashboard', StudentController.initialStudentDashboard);

module.exports = router;