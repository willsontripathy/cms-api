const express = require('express');
const {
    getAllLatestUpdates, 
    getLatestUpdates, 
    saveLatestUpdates, 
    updateLatestUpdates,
    deleteLatestUpdates} = require('../controller/latestUpdates.controller')

const latestUpdatesRouter = express.Router();

latestUpdatesRouter.get('/', getAllLatestUpdates);
latestUpdatesRouter.get('/:latId',getLatestUpdates);
latestUpdatesRouter.post('/save',saveLatestUpdates);
latestUpdatesRouter.post('/update',updateLatestUpdates);
latestUpdatesRouter.delete('/delete',deleteLatestUpdates);

module.exports = latestUpdatesRouter;