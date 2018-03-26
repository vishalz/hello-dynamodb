import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import AddTable from './AddTable';
import DropTable from './DropTable';

export default class App extends React.Component{

  render(){
  
    return(
      <div>
        <TitleBar title ={this.props.title}/> 
        <AddPlayer/>
        <p> This is for Administrators </p>
        <AddTable/>
        <DropTable/>
      </div>
    );
  
  
  };//end of render


};//end of App

App.propTypes = {
  
  title: PropTypes.string.isRequired
  
};


