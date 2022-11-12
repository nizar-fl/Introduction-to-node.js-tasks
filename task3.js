var fs = require('fs');
var buf = Buffer.alloc(1024);

fs.writeFile('welcome.txt', 'Hello Node', function (err) {
    if (err) throw err;
    console.log('File is created ');
  });
fs.open('hello.txt', 'r+', function(err, fd) {
    if (err) {
    return console.error(err);
    }
    

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
        console.log(err);
        }
        if(bytes > 0){
        console.log(buf.slice(0, bytes).toString());
        }
    })
})