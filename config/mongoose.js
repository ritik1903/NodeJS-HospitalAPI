// const mongoose = require("mongoose");
// // mongoose.connect('mongodb://localhost/hospitalAPI-db',{ 
// //    useNewUrlParser:true, 
// //    useUnifiedTopology:true,
// // });
// console.log(process.env.MONGO_URI);
// // const connectDB = mongoose.connect;
// // connectDB.on('error', console.error.bind(console, 'Connection error'));
// // connectDB.once('open', () => {
// //    console.log('Connected to MongoDB');
// // });
// const connectDB = async () => {
//    try {
//       // const conn = await mongoose.connect(process.env.MONGO_URI);
//       const conn = await mongoose.connect('mongodb://localhost/HospitalAPIdb',{
//          useNewUrlParser:true, 
//          useUnifiedTopology:true,
//       });

//       console.log("MongoDB Connection Established");
//    } catch (error) {
//       console.log(error);
//       process.exit(1);
//    }
// };
// module.exports = connectDB;


require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// exports.connectMonggose =()=>{
//     mongoose.connect(process.env.DATABASE_URL,
//     {
//         useNewUrlParser: true
//     })
//     .then((e)=>console.log("Connected to Mongodb =>> Auth-Project"))
//     .catch((e)=>console.log("Not Connect Mongodb"))
// }
const DB = 'mongodb+srv://pawarsubham438:sZYOM4JXvTsptJq1@cluster4.cdssbtp.mongodb.net/nodeapi?retryWrites=true&w=majority';

mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch((err) => console.log('No Connection' + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connection to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;