'use strict';

const express = require('express'),
    router = express.Router(),
    appointmentsModel = require('../models/choreListModel'),
    UsersModel = require('../models/usersModel');


router.get('/', async (req, res, next) => {
    const user_id = 2;
    const appointmentList = await appointmentsModel.getAppointmentsList(user_id);
    res.json(appointmentList).status(200);
});

router.get('/:provider_id', async (req, res) => {
    const { provider_id } = req.params;

    const providerAppointmentData = await appointmentsModel.getProviderAppointments(provider_id);
    res.json(providerAppointmentData).status(200);

    
        
});
router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;

    const userAppointmentData = await appointmentsModel.getUserAppointments(user_id);
    res.json(userAppointmentData).status(200);

    
        
});