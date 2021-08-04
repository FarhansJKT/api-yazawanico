__path = process.cwd()

var express = require('express');
var source = express.Router();

source.get('/', (req, res) => {
    res.sendFile(__path + '/template/home.html')
})

source.get('/config', (req, res) => {
    config = {
        status: 200,
        info: 'GabutzApi',
        bot: 'Yazawabotz'
    }
    res.json(config)
})

module.exports = source
