const express = require('express')
const bodyParser = require('body-parser')

const mssgCtrl = require('./controllers/message_controller')

const app = express()

app.use( bodyParser.json() )
app.use ( express.static('server/../public/build'))


app.post('/api/messages', mssgCtrl.create)

app.get('/api/messages', mssgCtrl.read)

app.put('/api/messages/:id', mssgCtrl.update)

app.delete('/api/messages/:id', mssgCtrl.delete)


const port = 3000


app.listen(port, () => {
  console.log('listening on port:', port)
})