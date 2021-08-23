const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);  // port 속성 부여

app.use((req, res, next) => {   // 공통 미들웨어
    console.log('모든 요청에 실행됨');
    next();
});

app.get('/', (req, res) => {    //라우터
    res.sendFile(path.join(__dirname, 'index.html'));   // 파일 불러오기 (fs 속성)
});

app.get('/about', (req, res) => {
    res.send('about express');
});


app.use((req, res, next) => {   // 어떤 라우터도 못 찾았을 때,
    res.status(404).send('404 error');  
})

app.use((err, req, res, next) => {  // error 미들웨어
    console.error(err);
    res.send('에러가 발생했습니다.');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});

