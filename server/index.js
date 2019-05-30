const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();

const productsController = require('./controllers/products_controller');

app.use(express.json())

massive(process.env.CONNECTION_STRING)
    .then(db =>{
        app.set('db', db);
        console.log('Database connected!');
    })
    .catch(err =>{
        console.log('Error while connecting to the database.', err)
    })

// endpoints
app.get('/api/products', productsController.getAll)
app.get('/api/products/:id', productsController.getOne)

app.put('/api/products/:id?desc=...', productsController.update)

app.post('/api/products', productsController.create)

app.delete('/api/products/:id', productsController.deletePro)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Listening on port ${process.env.SERVER_PORT}! `, 'Connecting to database...')
})