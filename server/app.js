
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (reg,res) {
    if(reg.url.indexOf('/static/') !== - 1) {
        readFile('../client/'+reg.url).then((data) => {
            res.write(data, "binary");
            res.end();
        })
    } else {
        var htmls = fs.createReadStream('../client/index.html','utf8');
        htmls.pipe(res)
    }
});

function readFile (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "binary", (err, data) => {
            if(err) {
                reject(err);
                return
            }
            resolve(data)
        })
    })
}
server.listen(8080,"localhost");
