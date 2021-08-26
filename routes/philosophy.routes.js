const express = require('express');
const {
    getAllPhilosophy, 
    getPhilosophy, 
    savePhilosophy, 
    updatePhilosophy,
    deletePhilosophy} = require('../controller/philosophy.controller')

const philosophyRouter = express.Router();

philosophyRouter.get('/', getAllPhilosophy);
philosophyRouter.get('/:phlosophyId',getPhilosophy);
philosophyRouter.post('/save',savePhilosophy);
philosophyRouter.post('/update',updatePhilosophy);
philosophyRouter.delete('/delete',deletePhilosophy);

module.exports = philosophyRouter;