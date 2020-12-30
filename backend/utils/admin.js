var mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
module.exports = async () => {
  const uri =
    "URI";
  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected…");
    })
    .catch((err) => console.log(err));
};

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
