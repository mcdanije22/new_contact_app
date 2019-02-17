import React, { Component } from 'react';
import './App.scss';
import NavigationBar from './components/navigationBar/NavigationBar';
import HeroProfile from './components/heroProfile/HeroProfile';
import ContactDisplay from './components/contacts/ContactDisplay';
import AddForm from './components/addForm/AddForm';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contactList: [
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny'}
      ],
      first:'',
      last: '',
      number: '',
      email:'',
      location:'',
      newCtc:{},
      addFormModal:false
    }
  };
  
  modalToggle = () =>{
    !this.state.addFormModal ? this.setState({addFormModal:true}) : this.setState({addFormModal:false});
    console.log(this.state.addFormModal)
  }

  inputChange = (e) =>{
    this.setState({[e.target.name]:e.target.value});
    console.log(e.target.value)
  }
  addNewContact = (event) =>{
    const newCtc = Object.assign({}, {first:this.state.first});
    this.setState({newCtc:newCtc})
    console.log(this.state.newCtc);
    event.preventDefault()

  }
  render() {
    
    return (
      <div className="App">
        <AddForm 
        addFormModal = {this.state.addFormModal}
        modalToggle = {this.modalToggle}
        inputChange = {this.inputChange}
        addNewContact = {this.addNewContact}
        />
          <div id = 'main'>
          <HeroProfile />
            <h1 id='contactCount'>
             <span id='contactCount'>{this.state.contactList.length}</span> Contacts 
            </h1>
          <ContactDisplay 
            contactList = {this.state.contactList}
          />  
          <NavigationBar modalToggle = {this.modalToggle}/>
           </div> 
        </div>
    );
  }
}

export default App;
