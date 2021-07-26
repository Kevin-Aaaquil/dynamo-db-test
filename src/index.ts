require('dotenv').config();
import express from "express"
import logger from "./logs";
import cors from 'cors'
import {test} from './routes/testRoutes'
const app = express();
const port = process.env.PORT || 3000;

app
.use(cors())
.use(express.json())
.use(express.urlencoded({extended:true}))
.use('/',test);



app.listen(port,()=>{
    logger.info(`✅ : server active on port ${port}`);
})