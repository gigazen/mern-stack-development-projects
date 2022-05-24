var http=require("http");
var app=http.createServer(function(request, response){
  response.writeHead(200, {
    'Content-type': 'text/html'
  });
  response.write("<h2>Welcome to Node.js</h2>");
  response.end();
});

app.listen(9030);
console.log(`Server Started:http://127.0.0.1:9030`);