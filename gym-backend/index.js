let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');
require('dotenv').config();
let router=require('./routes/register.js')

const app = express();
// const PORT = 3000;

// 🔗 replace with your own MongoDB URI (Atlas or local)
const MONGO_URI = "mongodb://127.0.0.1:27017/gymApp";

app.use(cors());                   // allow calls from your static site
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/register", router);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('database connected')
    app.listen(process.env.PORT, () =>
      console.log(`✅ Server running at http://localhost:${+process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
