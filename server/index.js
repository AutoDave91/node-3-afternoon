const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();

app.use(express.json())

massive(process.env.CONNECTION_STRING)
    .then(db =>{
        app.set('db', db);
        console.log('Database connected!');
    })
    .catch(err =>{
        console.log('Error while connecting to the database.', err)
    })

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Listening on port ${process.env.SERVER_PORT}! `, 'Connecting to database...')
})