const Course = require('../Models/Course')
const { multipleMongooseToObject} = require('../../util/mongoose')
class SiteController {

    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = multipleMongooseToObject(courses)
                res.render('home', { courses })
            })
            .catch(next)
    }

    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;