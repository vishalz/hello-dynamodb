'use strict'

const AWS = require('aws-sdk');
const uuidv1 = require('uuid/v1');

const ddbTableFactory = function(obj){

  // initialize empty object 
  let ddbTable = {};

  //initialize AWS
  AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
  });

  //private attributes 
  const tableName = obj.name;
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
  
  //private functions 
  let createTable = function createTable(obj,cbf){
    
    //let params = {
    //  TableName: 'players',
    //  KeySchema: [],
    //  AttributeDefinitions: [],
    //  ProvisioinedThroughput: {}
    //};
    
    let table ;
    let params = {
      TableName: tableName,
      KeySchema: [{AttributeName: '_id', KeyType: 'HASH'}],
      AttributeDefinitions: [{AttributeName: '_id' , AttributeType: 'S'}],
      ProvisionedThroughput: {ReadCapacityUnits: 1,WriteCapacityUnits: 1}
    };
    
    console.log(`Log from players-ddb: creating ${tableName}`);
    table = ddb.createTable(params, cbf);
  
  };//end of createTable
 

  let deleteTable = function (cbf){

    var params = {
      TableName : tableName
    };

    console.log(`Log from players-ddb: deleting table ${tableName}`);
    ddb.deleteTable(params,cbf); 
  
  };//end of deleteTable


  let insert = function insert(obj, cbf){
    
    console.log('adding',obj);
    var docClient = new AWS.DynamoDB.DocumentClient();
    let uuid = uuidv1(); 
    console.log(`Log from players-ddb: uuid ${uuid}`);
    let item = {
      '_id':    uuid,
      'name':   obj.name,
      'score':  obj.score
    };
    
    var params = { TableName: tableName, Item: item };
   
    console.log('Log from players-ddb: adding', item);
    docClient.put(params,cbf);
  };

  let find = function find(obj, cbf){
    var docClient = new AWS.DynamoDB.DocumentClient();
    let params = {TableName: tableName};
    docClient.scan(params, cbf);
  };//end of find

   let updateScore = function updateScore(id,value,cbf){
//    var docClient = new AWS.DynamoDB.DocumentClient()
//    var params = {
//      TableName: tableName,
//      Key: {"_id",id},
//      UpdateExpression: `set score  = score + :val`,
//      ExpressionAttributeValues:{":val": value},
//      ReturnValues:"UPDATED_NEW"
//    };
//
//    console.log("Updating the item...");
//    docClient.update(params,cbf);    
//  
  
  };//end of updateScore
 

  //public functions

  ddbTable.create   = createTable;
  ddbTable.drop     = deleteTable;
  ddbTable.find     = find;
  ddbTable.insert   = insert;
  ddbTable.updateScore   = updateScore;

  return ddbTable;

};//end of ddbTableFactory

module.exports = ddbTableFactory;






