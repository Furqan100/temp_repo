const http = require('http')
const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end("WELCOME TO OUR HOME PAGE")
    }
    if(req.url==='/about'){
        res.end('Here is our short history')
    }
    if(req.url==="/login"){
        res.end("Welcome to the Login Page")
    }
    res.end(`
        <h1>OOPS!!</h1>
        <p>This Page is Not Available</p>
        <a href="/">back home</a>`)
})
server.listen(8000)