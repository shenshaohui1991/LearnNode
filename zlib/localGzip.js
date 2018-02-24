const fs = require('fs');
const zlib = require('zlib');

let gzip = zlib.createGzip();

let inFile = fs.createReadStream('./extra/fileForCompress.txt');
let out = fs.createWriteStream('./extra/fileForCompress.txt.gz');

inFile.pipe(gzip).pipe(out);