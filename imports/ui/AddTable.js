import React from 'react';
import PropTypes from 'prop-types';

export default class AddTable extends React.Component{

  handleSubmit(e){
    let tableName = e.target.tableName.value;
    tableName = 'players';
    e.preventDefault();
    if(tableName){
      e.target.tableName.value = '';
      Meteor.call('DDBPlayers.create',{name: tableName});
    }
  
  
  };//end of handleSubmit
  
  render(){
  
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input id='tableName' type='text' placeholder='players'></input>
          <button>Add Table</button>
        </form>
      </div>
    );
  
  
  };//end of render


};//end of AddTable

AddTable.propTypes = {
  
  
};


