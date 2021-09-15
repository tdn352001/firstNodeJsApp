const Course = require('../Models/Course')
const { MongooseToObject } = require('../../util/mongoose')

class CourseController {

    create(req, res, next) {
        res.render('course/create')
    }

    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                course = MongooseToObject(course)
                res.render('course/show', { course })
            })
            .catch(next)
    }

    // POST:
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
        res.redirect(`/`)
    }
}

module.exports = new CourseController;