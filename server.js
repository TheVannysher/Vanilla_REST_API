const http = require("http");
const products = require('./data/products.json');
const regexs  = require('./regexs')
const { getProduct } = require('./controllers/productsController');

const server = http.createServer((req,res) => {
    //return basic html
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.write("<h1>Hello World!<h1>")
    // res.end()
    if(req.url === '/api/products' && req.method === 'GET'){
        getProduct(req,res)
    } else if(req.url.match(regexs.BY_ID_ROUTE) && req.method === 'GET'){
        const id = req.url.split('/api/products/')[1]
        getProduct(req,res,id)
    }else{
        res.writeHead(404 , {'Content-Type': 'application/json'})
        res.end(JSON.stringify({
            "message" : "not Found"
        }))
        
    }

})
const PORT = process.env.PORT || 5000

server.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})