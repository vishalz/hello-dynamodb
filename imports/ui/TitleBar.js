import React from 'react';
import PropTypes from 'prop-types';

import AddPlayer from './AddPlayer';

export default class TitleBar extends React.Component{

  render(){
  
    return(
      <div>
        <h1> {this.props.title}</h1>      
      </div>
    );
  
  
  };//end of render


};//end of TitleBar

TitleBar.propTypes = {
  
  title: PropTypes.string.isRequired
  
};


