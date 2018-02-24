const fs = require('fs');

let data;
let filePath = './extra/index.so.com.html';

try {
    data = fs.readFileSync(filePath, 'utf8');
    console.log(`文件内容：${data}`);
} catch(e) {
    console.log(`读取文件出错：${e.message}`);
}

console.log(`


`);

fs.readFile(filePath, {
    encoding: 'utf8',
    flag: 'r'
}, (err, data) => {
    if (err) {
        throw err;
    }

    console.log(`异步读取:${data}`);
});