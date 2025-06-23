//1.import json-server
const jsonServer =require('json-server')
//5.import cors 
const cors=require('cors')

//2. create a server using json.server

const server =jsonServer.create()

//3 .setup a middleware

const middleware=jsonServer.defaults()

//4.setup routes

const route=jsonServer.router('db.json')

//6.implementing use

server.use(cors())
server.use(middleware)
server.use(route)

//7.create a port
const PORT = process.env.PORT || 3000
server.listen(PORT,()=>{
    console.log("server runing on the port ",PORT);
    
})