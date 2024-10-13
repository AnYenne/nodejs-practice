const newsController = require('../app/controller/newsController');
const express = require('express');
const router = express.Router();

    
    //news :slug
    router.get('/:slug', newsController.show); // ke tu luc vao url /news/sdsdd se thuc hien lenh nay dau tien /news
    
    //news page
    router.get('/',newsController.index) ; //vao vi tri /news


module.exports = router;