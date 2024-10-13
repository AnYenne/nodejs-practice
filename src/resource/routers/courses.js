const coursesController = require('../app/controller/coursesController');
const express = require('express');
const router = express.Router();

    //GET /courses/create
    router.get('/create', coursesController.create)
   

    // GET /courses/course
    router.get('/:slug', coursesController.show)
   

    //GET /courses
    router.get('/', coursesController.index)


module.exports = router