const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let a = 'cái lồn má mày chứ'
  res.send('Hello Cái mả cha mày')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})