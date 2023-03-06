import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import route from './routes/route.js';
import bodyParser from 'body-parser';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',route);
const PORT =8000;

Connection();

app.listen(PORT , () => console.log(`Your server is running successfully on port ${PORT}` ));