const fs = require('fs');

let readStream = fs.createReadStream('./extra/jingyu.html');

readStream
    .on('data', (chunk) => {
        console.log(`接收的长度: ${chunk.length}`);
    })
    .on('error', () => {
        console.log('error');
    })
    .on('end', () => {
        console.log('read end');
    })
    .on('close', () => {
        console.log('close');
    });