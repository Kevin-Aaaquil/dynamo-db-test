import { buildDevLog } from "./DEVlogger";
import { buildProdLog } from "./PRODlogger";
require('dotenv').config();
let logger = null;
if(process.env.NODE_ENV === 'development'){
    logger = buildDevLog()
}
else{
    logger = buildProdLog()
}

export default logger