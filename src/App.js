import React, { Component } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import HeroProfile from './components/HeroProfile';
import ContactDisplay from './components/ContactDisplay';
import AddForm from './components/AddForm';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contactList:[
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'}
      ]

    };
  };

  render() {
    
    return (
      <div className="App">
        <AddForm />
          <div id = 'main'>
          <HeroProfile />
            <h1>
              Contacts 
            </h1>
          <ContactDisplay 
            contactList = {this.state.contactList}
          />  
          <NavigationBar />
           </div> 
        </div>
    );
  }
}

export default App;
