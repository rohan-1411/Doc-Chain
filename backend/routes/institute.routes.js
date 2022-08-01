const express = require('express');
const router = express.Router();

let InstituteController = require('../controllers/institute.controller');

router.post('/loginInstitute', InstituteController.loginInstitute);
router.post('/registerInstitute', InstituteController.registerInstitute);
router.post('/initialDashboard', InstituteController.initialDashboard);
router.post('/logout', InstituteController.logout);

module.exports = router;