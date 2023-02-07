const express = require('express');
const { dashboard, pieChart, customers } = require('../controllers/dashboardController');
const router = express.Router()

router.get('/',dashboard)
router.get('/customers',customers)
router.get('/pieChart',pieChart)

module.exports = {
    routes : router
};