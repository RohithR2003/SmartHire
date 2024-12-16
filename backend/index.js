import express from 'express';
import { connectToDatabase } from './database/connectionToDatabase.js';
import dotenv from "dotenv";
import authRoutes from './routes/auth-route.js';
import cookieParser from 'cookie-parser';
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true}));
app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies

app.get('/', (req, res) => {
    res.send();
})

connectToDatabase();

app.use('/api/auth', authRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

 
// rohithr -> mongo username
// 5AX4YPPsaqeYcnh6 -> mongo Password
