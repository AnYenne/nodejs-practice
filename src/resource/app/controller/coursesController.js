
const path = require('path');
const Course = require('../model/Course')
const {mutileMongooseToObject, convertoObject} = require('../../util/mongoose')

class CoursesController {

    

    show(req,res,next){
        Course.findOne({slug: req.params.slug })
        .then(function(course){
            if(course!== null){
                res.render(path.join('courses/show'),{
                    course: convertoObject(course)
                })
            } else{
                res.redirect('/')
            }
            })
        .catch(next)
        
    }

    index(req,res,next){
        Course.find({})
        .then(function(courses){

            res.render(path.join('courses'),{
                courses: mutileMongooseToObject(courses)
            })
            })
        .catch(next)
        
    }
    create(req,res,next){
        Course.find({})
        .then(function (course){
            res.render('courses/create',{
                course: mutileMongooseToObject(course)
            })
        })
        .catch(next)
    }

   

}

module.exports = new CoursesController;