import React, { Component } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';


class App extends Component {
  render() {
    return (
      <div className="App">
          <SideBar />
          <div id = 'main'>
            <NavigationBar />
              <h1>
                Contacts 
              </h1>
           </div> 
        </div>
    );
  }
}

export default App;
