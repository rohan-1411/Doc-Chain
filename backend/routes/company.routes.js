const express = require('express');
const router = express.Router();

let CompanyController = require('../controllers/company.controller');

router.post('/loginCompany', CompanyController.loginCompany);
router.post('/registerCompany', CompanyController.registerCompany);
router.get('/getAllApplications', CompanyController.getAllApplications);
router.post('/initialCompanyDashboard', CompanyController.initialCompanyDashboard);
router.post('/verifyDocument', CompanyController.verifyDocument);

module.exports = router;