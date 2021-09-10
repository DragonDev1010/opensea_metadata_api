const express = require('express')
const path = require('path')
const moment = require('moment')
const { HOST } = require('./src/constants')
const db = require('./src/database')

const PORT = process.env.PORT || 5000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.send('Get ready for OpenSea!');
})

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const person = db[tokenId]
  console.log(person.attributes[0].trait_type)
  const data = {
    'id': person.id,
    'description': person.description,
    'external_url': person.external_url,
    'image': person.image,
    'name': person.name,
    'attributes': [
      {
        'trait_type': person.attributes[0].trait_type,
        'value': person.attributes[0].value
      },
      {
        'trait_type': person.attributes[1].trait_type,
        'value': person.attributes[1].value
      },
      {
        'trait_type': person.attributes[2].trait_type,
        'value': person.attributes[2].value
      },
      {
        'trait_type': person.attributes[3].trait_type,
        'value': person.attributes[3].value
      },
      {
        'trait_type': person.attributes[4].trait_type,
        'value': person.attributes[4].value
      },
      {
        'trait_type': person.attributes[5].trait_type,
        'value': person.attributes[5].value
      },
      {
        'trait_type': person.attributes[6].trait_type,
        'value': person.attributes[6].value
      },
      {
        'trait_type': person.attributes[7].trait_type,
        'value': person.attributes[7].value
      },
    ]
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})