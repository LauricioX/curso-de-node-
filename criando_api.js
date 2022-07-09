let carros = JSON.stringify(
  [
   {'id':1,'marca':'ford','modelo':'hrv'},
  {'id':2,'marca':'fiat','modelo':'harbo'}, 
  {'id':3,'marca':'ford','modelo':'ranger'},
  {'id':4,'marca':'chevrolet','modelo':'corola'},
    {'id':5,'marca':'sla','modelo':'golf'},
  {'id':6,'marca':'renalt','modelo':'sandero'},
  {'id':7,'marca':'toyota','modelo':'hillux'}
    
]
);

// let obj = JSON.parse(carros);

let http=require('http');
let server=http.createServer(function(request,response){
  response.setHeader("Access-Control-Allow-Origin",'*');
  response.writeHeader(200,{"Content-Type":"text/html"});
  response.write(carros);
  response.end();
});

server.listen(3000)
