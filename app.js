var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if(req.method==='GET'){
        if(req.url==='/form'){
            fs.createReadStream('./form.html').pipe(res);
        }else if(req.url==='/url'){

        }else if(req.url==='/ajax'){
       
        }else if(req.url =='/buffer'){

        }else{

        }
    }
    if(req.method==='POST'){
        console.log('headers',req.headers);
        const buf1 = Buffer.alloc(0);
        req.on('data',function(chunk){
           var result = Buffer.concat([buf1,chunk]);
           console.log('result',result.toString('utf8'));
        }).on('end',function(){
        });
    }
})

server.listen(3000);