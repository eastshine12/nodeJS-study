const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
    console.log(`글의 내용은 ${data.toString()} 입니다`);
})