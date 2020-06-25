var http = require('http');
var static = require('node-static');
var file = new static.Server('../');

http.createServer(function(req, res) {

  if (req.url == '/registration') {
    req.on('data', data => {
        var decodedData = JSON.parse(data.toString());
        for(let x of decodedData.age){
            if(isNuber(x) == true){
                res.statusCode = 402;
                return res.end('Letter in Age'); 
            }
        }

        for(let char of decodedData.name){
            if(isNaN(char) == false){
                res.statusCode = 403;
                return res.end('Number in Name'); 
            }
        }
        
        

      res.end(data.toString());
    });
  }
  file.serve(req, res);
})
.listen(8080);



console.log('Server running on port 8080');

function isNuber(x){
    z = parseInt(x);

    if(isNaN(z) == true){
        return true;
    }else{
        return false;
    }
}