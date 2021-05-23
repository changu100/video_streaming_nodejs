


var express = require('express');
var router = express.Router();
var vidStreamer = require("vid-streamer");

/* GET users listing. */ 
router.use('/', vidStreamer);


/*
use메서드는 모든 HTTP 메서드에 대해 요청 주소만 일치하면 실행되지만

get, post, put, patch, delete 같은 메서드는 주소뿐만 아니라 HTTP 메서드까지 일치하는 요청일 때만 실행된다. 

- express()는 listen()을 이용해 수신한다.

출처: https://fullmoon1344.tistory.com/144 [코드이터]

*/
module.exports = router;
