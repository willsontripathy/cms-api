const express = require('express');
const {
    getAllPages, 
    getPage, 
    savePage, 
    updatePage,
    deletePage} = require('../controller/page.controller')

const pageRouter = express.Router();

pageRouter.get('/', getAllPages);
pageRouter.get('/:pageId',getPage);
pageRouter.post('/save',savePage);
pageRouter.post('/update',updatePage);
pageRouter.delete('/delete',deletePage);

module.exports = pageRouter;