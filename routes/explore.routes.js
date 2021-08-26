const express = require('express');
const {
    getAllExplore, 
    getExplore, 
    saveExplore, 
    updateExplore,
    deleteExplore} = require('../controller/explore.controller')

const exploreRouter = express.Router();

exploreRouter.get('/', getAllExplore);
exploreRouter.get('/:exploreId',getExplore);
exploreRouter.post('/save',saveExplore);
exploreRouter.post('/update',updateExplore);
exploreRouter.delete('/delete',deleteExplore);

module.exports = exploreRouter;