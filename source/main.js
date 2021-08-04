__path = process.cwd()

var express = require('express');
var source = express.Router();

source.get('/', (req, res) => {
    res.sendFile(__path + '/template/index.html')
})

module.exports = source