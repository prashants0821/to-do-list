import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = ()=>{

    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-qwdweqc-shard-00-00.bk2tdzk.mongodb.net:27017,ac-qwdweqc-shard-00-01.bk2tdzk.mongodb.net:27017,ac-qwdweqc-shard-00-02.bk2tdzk.mongodb.net:27017/?ssl=true&replicaSet=atlas-50y72l-shard-0&authSource=admin&retryWrites=true&w=majority`


    mongoose.connect(MONGODB_URL , {useNewUrlParser: true});

    mongoose.connection.on('connected' , ()=>{
        console.log('database connected successfully');
    })
    mongoose.connection.on('disconnected', ()=>{
        console.log('database is disconnected');
    });

    mongoose.connection.on('error', ()=>{
        console.log('error while connecting with database', error.message);
    });
}

export default Connection;