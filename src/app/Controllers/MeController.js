const Course = require('../Models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored_courses',{ 
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
}

module.exports = new MeController;