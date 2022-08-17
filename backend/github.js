const request = require('request')
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')

const app = express()
app.listen(5000)
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))


app.get('/:user', (req, res) => {
  const { user } = req.params

  const values = []

  request.get(`https://github.com/${user}`, (error, response, body) => {
    console.error('error:', error)
    console.log('statusCode:', response && response.statusCode);

    if (response.statusCode === 404) {
      console.log('response send')
      res.json('not found')
      return
    }

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
})
