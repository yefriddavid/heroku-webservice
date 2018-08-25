const express = require('express')
const app = express()
var moment = require('moment');


app.all('/', (req, res) => res.send('Hello World!'))
app.get('/datetime', (req, res) => {
	res.send(moment().format('Y-MM-DD hh:mm:ss'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))


