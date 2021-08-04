/**
 *  HiRYN & Riripii
 *
 */

__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var client = db.get("client");
} catch (e) {
	console.log('')
}

var creator = ['HiRYN & Riripii'];
//ubah param klo ga sesuai:v
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var yts = require('yt-search')
var source = express.Router();
var brainly = require('brainly-scraper-v2')
var { color, bgcolor } = require(__path + '/lib/color.js');

var {
	Base
} = require('./../lib');

var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

logHandler = {
  notUrl: {
        status: false,
        code: 406,
        message: 'masukan parameter url !'
    },
	noText: {
        status: false,
        Author: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
  error: {
        status: false,
        message: 'mungkin sedang dilakukan perbaikan'
    }
  
}

source.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode;
		if (!type) return res.json({status: false, creator, code: 403, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(logHandler.error)
			}
})

// IMAGE API'S : SFW
source.get('/image/sfw/neko', async (req, res, next) => {
fetch(encodeURI(`https://nekos.life/api/v2/img/neko`))
        .then(response => response.json())
        .then(data => {
             res.json({
                 status : true,
                 Author : `${creator}`,
                 result : {
                     url : `${data.url}`
                 },
             })
         })
         .catch(e => {})
})

source.get('/image/swf/waifu', async (req, res, next) => {
fetch(encodeURI(`https://api.waifu.pics/sfw/waifu`))
        .then(response => response.json())
        .then(data => {
             res.json({
                 status : true,
                 Author : `${creator}`,
                 result : {
                     url : `${data.url}`
                 },
             })
         })
         .catch(e => {})
})

source.get('/image/swf/cry', async (req, res, next) => {
fetch(encodeURI(`https://api.waifu.pics/sfw/cry`))
        .then(response => response.json())
        .then(data => {
             res.json({
                 status : true,
                 Author : `${creator}`,
                 result : {
                     url : `${data.url}`
                 },
             })
         })
         .catch(e => {})
})

source.get('/image/swf/hug', async (req, res, next) => {
fetch(encodeURI(`https://api.waifu.pics/sfw/hug`))
        .then(response => response.json())
        .then(data => {
             res.json({
                 status : true,
                 Author : `${creator}`,
                 result : {
                     url : `${data.url}`
                 },
             })
         })
         .catch(e => {})
})

source.get('/image/swf/kiss', async (req, res, next) => {
fetch(encodeURI(`https://api.waifu.pics/sfw/kiss`))
        .then(response => response.json())
        .then(data => {
             res.json({
                 status : true,
                 Author : `${creator}`,
                 result : {
                     url : `${data.url}`
                 },
             })
         })
         .catch(e => {})
})

// EDUKASI API'S
source.get('/brainly', async (req, res, next) => {

	var text = req.query.text;

	if(!text) return res.json(logHandler.noText)
	brainly(text)
	.then(response => response.json())
        .then(data => {
             res.json({
                 status : true,
                 Author : `${creator}`,
                 result : {
                     data : `${data.data}`
                 },
             })
         })
         .catch(e => {})
})
