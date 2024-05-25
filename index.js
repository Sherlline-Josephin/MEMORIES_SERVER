import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app=express();




app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL='mongodb+srv://sherlline:shasha@mycluster.jyb9qpn.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const PORT=process.env.PORT||5000;
//connect to db  {object with all the options}
mongoose.connect(CONNECTION_URL)
//returns a promise     //when connection is suucessful we make app to listen
    .then(()=> app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
    //if connection not successful
    .catch((error)=>console.log(`${error} did not connect`));
//mongoose.set('useFindAndModify',false);