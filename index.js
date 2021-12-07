
const http=require('http');
const app=require('./app');
const index=http.createServer(app); 

index.listen(3000, ()=>{console.log("server running")});
