const fs = require('fs');
const zlib = require('zlib');

let gunzip = zlib.createGunzip();

let inFile = fs.createReadStream('./extra/fileForCompress.txt.gz');
let out = fs.createWriteStream('./extra/fileForCompress2.txt');

inFile.pipe(gunzip).pipe(out);