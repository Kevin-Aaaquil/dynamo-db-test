import DynamoDB from 'aws-sdk/clients/dynamodb'
import logger from './logs'

const patanhi = ()=>{
    logger.warn("Kuch nahi hai yaha pe: Code nahi hai lodu");
}

patanhi();

