import React from 'react';
import PropTypes from 'prop-types';

export default class AddPlayer extends React.Component{

  handleSubmit(e){
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if(playerName){
      e.target.playerName.value = '';
      //Players.insert ({name: playerName , score: 0});
      // call meteor method addPlayer();
    }
  
  
  };//end of handleSubmit
  
  render(){
  
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input id='playerName' type='text' placeholder='Player Name'></input>
          <button>Add Player</button>
        </form>
      </div>
    );
  
  
  };//end of render


};//end of AddPlayer

AddPlayer.propTypes = {
  
  
};


