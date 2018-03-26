import {Meteor} from 'meteor/meteor';
import {DDBPlayers} from './DDBPlayers';

Meteor.methods({

  'DDBPlayers.create': function create(obj){
  
    //todo validate obj arguments here 
    //todo valdiate user id here 
    
    
    DDBPlayers.create({}, (err,data)=>{
      if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
      } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
      }
    }); //end of DDBPlayers.create 
  
  }, //end of DDBPlayers.create

  'DDBPlayers.drop': function drop(obj){
  
    //todo validate obj arguments here 
    //todo valdiate user id here 
  
     DDBPlayers.drop((err,data)=>{
      if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
      } else {
        console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
      }
     });//end of drop
  
  
  },// end of DDBPlayers.drop

  'DDBPlayers.addPlayer': function(obj){},
  'DDBPlayers.removePlayer': function(obj){},
  'DDBPlayers.updateScore': function(obj){},
  


});//end of methods
