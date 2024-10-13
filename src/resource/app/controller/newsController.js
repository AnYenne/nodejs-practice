const Course = require('../model/Course')

class NewsController {



    //GET /news
    index(req,res){
        res.render('news')
    };

    //GET /news/
    show(req, res,next){
        res.send('news detail')
    };
};

module.exports = new NewsController;