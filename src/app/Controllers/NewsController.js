
class NewsController {

    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send("lô con cặc")
    }
}

module.exports = new NewsController;