const MONGO_URI="mongodb+srv://arifahmed260116:db_user@cluster0.fbpntow.mongodb.net/organicdb?retryWrites=true&w=majority"
const Mongoose= require('mongoose');



const connectDB=  async ()=>{
       try {
        const conn= await Mongoose.connect(MONGO_URI);
        console.log(`conneceted succesful: `);
       } catch (error) {
        console.log(error);
        
       }

}

module.exports=connectDB