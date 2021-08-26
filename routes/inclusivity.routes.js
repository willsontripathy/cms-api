const express = require('express');
const {
    getAllInclusivitys, 
    getInclusivity, 
    saveInclusivity, 
    updateInclusivity,
    deleteInclusivity} = require('../controller/inclusivity.controller')

const inclusivityRouter = express.Router();

inclusivityRouter.get('/', getAllInclusivitys);
inclusivityRouter.get('/:inclusivityId',getInclusivity);
inclusivityRouter.post('/save',saveInclusivity);
inclusivityRouter.post('/update',updateInclusivity);
inclusivityRouter.delete('/delete',deleteInclusivity);

module.exports = inclusivityRouter;