const express = require('express')
const app = express()
var moment = require('moment');

let port = process.env.PORT || process.argv[2] || 8080;


app.all('/', (req, res) => res.send('Hello World!'))
app.get('/datetime', (req, res) => {
	res.send(moment().format('Y-MM-DD hh:mm:ss'))
})

app.listen(port, () => console.log('Example app listening on port 3000!'))


