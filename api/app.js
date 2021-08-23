const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');


const server = app.listen(3001, () => {
    console.log('Start Server : localhost:3001');
});

const key = {
    apikey: '23Q002A-JD6M37Y-QAETGWM-01FEN7X',
    uuid: '10ee0009-934d-419f-ba9d-a872005eea9f'
};

app.get('/api/users/:apikey/:type', async (req, res) => {
    let {apikey, type} = req.params;
    console.log(apikey);
    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not valid.');
    } else {
        if(type == 'seoul') {
            let data = [
                {name:"홍길동", city:"서울"},
                {name:"김철수", city:"서울"},
            ];
            res.send(data);
        } else if (type == 'jeju') {
            let data = [
                {name:"박지성", city:"제주"},
                {name:"손흥민", city:"제주"},
            ];
            res.send(data);
        } else {
            res.send('해당 지역이 아닙니다.');
        }
    }

});