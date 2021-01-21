const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes =require('./routes/category'); 
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const path = require('path');
const cors = require('cors');

env.config();

//mongoose connection
//mongodb+srv://root:<password>@cluster0.wwlpr.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.wwlpr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority` , 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database Connected');
});

app.use(express.json());
app.use(cors());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/public',express.static(path.join(__dirname,'uploads')));

app.listen(process.env.PORT, () => {
    console.log(`Hi server is running on port ${process.env.PORT} `);
});