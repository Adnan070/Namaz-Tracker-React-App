var mongoose = require('mongoose')
const uri = "mongodb+srv://ak-development:CW4Yh7Opomvr5CSH@ak-development.gmdnp.mongodb.net/tracker?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))


// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("tracker").collection("roza");
//   collection.find({},(err,rec) =>{
//       if(err){
//           console.log(err)
//       }
//       else{
//           console.log("Record",rec)
//       }
//   });
//   // perform actions on the collection object
//   client.close();
// });