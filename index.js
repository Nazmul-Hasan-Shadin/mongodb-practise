const app= require('express')()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


const { MongoClient } = require("mongodb");


// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://arifahmed260116:db_user@cluster0.fbpntow.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    console.log('connection succesful');
     const productCollection= client.db("organicdb").collection("products");

            //     read

 app.get('/allproducts', (req,res)=>{

  productCollection.find({})
  .toArray( (err,documents)=>{
      res.send(documents);    

  })
      


 })
 




            //    post
     app.post("/addProduct", (req,res)=>{
         const product=req.body;
        productCollection.insertOne(product)
        .then(result=>{
            console.log('data added succesful');
            res.send('success');
        })
       


     })



    console.log('succesful');
  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir);












app.listen(3000,()=>console.log('ffd'))