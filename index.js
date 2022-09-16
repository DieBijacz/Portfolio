const express = require('express')
const cors = require('cors')
const request = require('request')
const cheerio = require('cheerio')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()
app.listen(PORT, () => {
  console.log(`Starting server at ${PORT}`)
})
app.use(express.static('public'))

app.get('/:user', (req, res, next) => {
  const { user } = req.params

  const values = []

  request.get(`https://github.com/${user}`, (error, response, body) => {

    if (error) return next(error)

    if (response.statusCode === 404) return next({
      status: 404,
      message: `User '${user}' not found`
    });

    if (body) {
      const $ = cheerio.load(body);
      $('rect').get().reduce((data, rect) => {
        const value = (() => {
          const count = $(rect).data('count');
          // const date = $(rect).data('date')
          // return { count, date };
          return count
        })();
        values.push(value)
      }, {});
      res.json(values)
    }
  })

  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message });
  });
})
