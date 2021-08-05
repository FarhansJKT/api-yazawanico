// JANGAN RUBAH APA APA DI FILE INI

var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')

var mainrouter = require('./source/main'),
    apirouter = require('./source/api')

var source = express()
source.enable('trust proxy');
source.set("json spaces",2)
source.use(cors())
source.use(secure)
source.use(express.static("public"))

source.use('/', mainrouter)
source.use('/api', apirouter)

source.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = source
