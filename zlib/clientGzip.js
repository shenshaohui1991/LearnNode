const zlib = require('zlib');
const https = require('https');
const fs = require('fs');

const request = https.get({
    host: 'www.jingyu.com',
    path: '/',
    headers: {
        'Accept-Encoding': 'gzip,deflate'
    }
});

request.on('response', (res) => {
    const output = fs.createWriteStream('jingyu.html');

    switch(res.headers['content-encoding']) {
        case 'gzip':
            res.pipe(zlib.createGunzip()).pipe(output);
            break;

        case 'deflate':
            res.pipe(zlib.createInflate()).pipe(output);
            break;

        default:
            res.pipe(output);
            break;
    }
});