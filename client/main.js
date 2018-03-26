import React from 'react';
import ReactDOM from 'react-dom';

import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import App from './../imports/ui/App';

Meteor.startup(()=>{

  Tracker.autorun(()=>{
    let title = "Hello Dynamodb";
    ReactDOM.render(<App title={title} />,document.getElementById('app'));

  });


});//end of startup
