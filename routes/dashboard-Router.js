const express = require('express');
const { dashboard, pieChart, customers, userChart, hobbiesChart, index, educationChart } = require('../controllers/dashboardController');
const router = express.Router()

router.get('/dashboard',dashboard)
router.get('/customers',customers)
router.get('/pieChart',pieChart)
router.get('/userChart',userChart)
router.get('/hobbiesChart',hobbiesChart)
router.get('/educationChart',educationChart)
router.get('/index',index)

module.exports = {
    routes : router
};