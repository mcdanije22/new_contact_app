import React, { Component } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import HeroProfile from './components/HeroProfile';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div id = 'main'>
          <HeroProfile />
              <h1>
                Contacts 
              </h1>
            <NavigationBar />
           </div> 
        </div>
    );
  }
}

export default App;
