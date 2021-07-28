import AWS from 'aws-sdk'
import logger from './logs'
import * as nanoid  from 'nanoid'
require('dotenv').config();

const _region = process.env.AWS_REGION
const _secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const _accessKeyId = process.env.AWS_ACCESS_KEY_ID
const _tableName = process.env.AWS_DYNAMO_TABLE_NAME

AWS.config.update({
region : _region,
accessKeyId : _accessKeyId,
secretAccessKey : _secretAccessKey
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const getData = async ()=>{
    const params = {
        TableName : _tableName,
    };
    const data = await dynamoClient.scan(params).promise()
   return data; //
}

const getDataById = async(ID)=>{
    ID =  ID.toString();
const params = {
    TableName :_tableName,
    Key : {
        _id :ID
    }
}
return await dynamoClient.get(params).promise()
}

const addOrUpdateData = async(packet)=>{
    packet._id = nanoid.nanoid(12).toString();
const params = {
    TableName : _tableName,
    Item : packet
}
return await dynamoClient.put(params).promise();
}


const deleteData = async(ID)=>{
    const params = {
        TableName : _tableName,
        Key : {
            _id:ID
        },
    }
    return await dynamoClient.delete(params).promise();
}

export default {getData,addOrUpdateData,deleteData,getDataById}