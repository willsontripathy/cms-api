const express = require('express');
const {
    getAllBanner, 
    getBanner, 
    saveBanner, 
    updateBanner,
    deleteBanner} = require('../controller/banner.controller')

const bannerRouter = express.Router();

bannerRouter.get('/', getAllBanner);
bannerRouter.get('/:bannerId',getBanner);
bannerRouter.post('/save',saveBanner);
bannerRouter.post('/update',updateBanner);
bannerRouter.delete('/delete',deleteBanner);

module.exports = bannerRouter;