const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const massive=require('massive');
const products_controller=require('./products_controller');
const connectionString='postgres://vbkyinmcvyvvku:56456e5d1395a6077367357454077c990904c77f0c9191440895121eddf35d22@ec2-107-21-113-16.compute-1.amazonaws.com:5432/d736lme3p4m3ku?ssl=true'

const app= module.exports =express();
app.use(bodyParser.json());
app.use(cors());
massive(connectionString).then(dbInstance=>app.set('db',dbInstance));

app.post('/api/product',products_controller.create);
app.get('/api/products',products_controller.getAll);
app.get('/api/product/:id',products_controller.getOne);
app.put('/api/product/:id',products_controller.update);
app.delete('/api/product/:id',products_controller.delete);

const port=3000;
app.listen(port,() => {console.log(`Server listening on port ${port}.`); } );



