//config inicial
require('dotenv').config()
const express = require('express')//smp importa uma biblioteca e joga numa var
const mongoose = require('mongoose')
const app = express()

//utiliza-se middlewares para ler json
app.use(
    express.urlencoded({//middleware
        extended: true,
    }),
)
app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial ==> endpoint
app.get('/', (req,res)=>{
    //mostrar requisição
    res.json({
        message: 'Bom dia!!'
    })
})
//entregar uma porta
const DB_USER = process.env.DB_USER
const  DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.3znvw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)
.then(()=>{
    console.log('conectamos ao DB!')
    app.listen(3000)
})
.catch((err)=>{
    console.log(err)
})