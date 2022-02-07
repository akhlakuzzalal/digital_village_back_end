const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const usersHandaler = require('./handaler/usersHandaler');

const port = process.env.PORT || 5000;

// midlewire
const app = express();
app.use(cors());
app.use(express.json());

// connection with mongoDB Atlas
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rolps.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritymongodb+srv://<username>:<password>@cluster0.rolps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri,{
   useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log('connection successfull'))
.catch((err)=>console.log(err));

async function run(){
   try{

      app.use('/user',usersHandaler);

   }
   catch(error){
   }
}
run().catch(console.dir);


// server running
app.get('/', (req, res) => {
    res.send('Smart village server is Running');
 });


// app listner
 app.listen(port, () => {
    console.log('server is running in localhost:', port)
 })