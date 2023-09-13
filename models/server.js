const express=require('express');
const bodyparser = require('body-parser')
const dbConnection=require('../database/config')


class server{
    constructor(){
        this.app=express();
        this.port= process.env.PORT || 8087
        this.productoPath='/api/producto'
        this.facturaPath='/api/factura'
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    middlewares() //Directorio Publico
    {
        this.app.use(bodyparser.json());
        this.app.use(express.static(__dirname + "/public"));
    }
    routes()
    {
        this.app.use(this.productoPath, require('../routes/producto'))
        this.app.use(this.facturaPath, require('../routes/factura'))
    }
    async dbConectar(){
        await dbConnection()
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}
module.exports= server