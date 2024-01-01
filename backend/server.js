import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import carRoutes from './routes/carRoutes.js'
const port = process.env.PORT;
connectDB();

const app = express();

app.get('/',(req,res) => {
    res.send('API is running...');
});
app.use('/api/cars',carRoutes)

app.listen(port,() => console.log(`Server runnin on port ${port}`));