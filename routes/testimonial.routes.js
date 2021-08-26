const express = require('express');
const {
    getAllTestimonials, 
    getTestimonial, 
    saveTestimonial, 
    updateTestimonial,
    deleteTestimonial} = require('../controller/testimonial.controller')

const testimonialRouter = express.Router();

testimonialRouter.get('/', getAllTestimonials);
testimonialRouter.get('/:testimonialId',getTestimonial);
testimonialRouter.post('/save',saveTestimonial);
testimonialRouter.post('/update',updateTestimonial);
testimonialRouter.delete('/delete',deleteTestimonial);

module.exports = testimonialRouter;