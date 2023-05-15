//https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu  ton videon seuraus katottu 18:38

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/database.js';
import mongoose from 'mongoose';

const app = express();

import postRoutes from './routes/posts.js';

const port = 3000;

mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database '+config.database)
})

mongoose.connection.on('error', (err)=>{
    console.log('Database error: '+err)
})

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use(cors())

app.use('/posts', postRoutes)




app.listen(port, ()=>{
    console.log('Server started on port '+port)
})