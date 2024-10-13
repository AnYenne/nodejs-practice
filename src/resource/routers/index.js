const newsRouter = require('../routers/news')
const coursesRouter = require('./courses')

function router(app){

    //courses
    app.use('/courses',coursesRouter)

    //news
    app.use('/news',newsRouter );

    //Home page
    app.get('/', (req, res) => res.render('home'));



}

module.exports = router;

