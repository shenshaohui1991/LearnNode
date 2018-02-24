const http = require('http');
const zlib = require('zlib');
const fs = require('fs');

let filePath = './extra/fileForGzip.html';
let server = http.createServer((req, res) => {
    let acceptEncoding = req.headers['accept-encoding'];
    let gzip;

    if (acceptEncoding.indexOf('gzip') > -1) {
        gzip = zlib.createGzip();

        res.writeHead(200, {
            'Content-Encoding': 'gzip'
        });
        fs.createReadStream(filePath).pipe(gzip).pipe(res);
    } else {
        fs.createReadStream(filePath).pipe(res);
    }
});

server.listen(3000);