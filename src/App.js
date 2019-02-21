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
        {first:'Myles',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny'}
      ],
      first:'',
      last: '',
      number: '',
      email:'',
      location:'',
      addFormModal:false,
      contactCardModal:false,
      contactModalId:''
    }
  };

  componentWillMount(){
    const local = JSON.parse(localStorage.getItem('contact'));
    if(local !== null){
      this.setState({contactList:local});
    }
  };

  addToLocalStorage = (newContact) =>{
    if(localStorage.getItem('contact') == null){
      localStorage.setItem('contact', JSON.stringify([...this.state.contactList]));
    } else{
      const oldLocalStorage = JSON.parse(localStorage.getItem('contact'));
      localStorage.setItem('contact', JSON.stringify([...oldLocalStorage,newContact]));
    }
  };

  //add form modal logal 
  clickOutsideAddFormModal = (e)=>{
   if(e.target.id === 'addFormModel'){
    this.addFormModalToggle();
    this.clearAddForm();
    }
  };
  addFormModalToggle = () =>{
    !this.state.addFormModal ? this.setState({addFormModal:true}) : this.setState({addFormModal:false});
    this.clearAddForm();
  };
  //add form modal logal end


  //adding contact logic
  inputChange = (e) =>{
    this.setState({[e.target.name]:e.target.value});
  };

  addNewContact = (newContact) =>{
    if(this.state.first === '' || this.state.last === '' || this.state.number === '' || this.state.email === '' || this.state.location === ''){
      alert('Please fill in all fields');
    }else{
    const newContactList = [...this.state.contactList, newContact];
    this.setState({contactList:newContactList},()=>{
      console.log(this.state.contactList); 
      this.addToLocalStorage(newContact);
      });
      this.addFormModalToggle();
    }
  };

  clearAddForm = () =>{
    this.setState({
      first:'',
      last:'',
      number:'',
      email:'',
      location:''
    });
  };

  onSubmitAddForm = (e) =>{
    e.preventDefault();
    const newContact = Object.assign({}, {
      first:this.state.first, 
      last:this.state.last, 
      number:this.state.number, 
      email:this.state.email,
      location:this.state.location
    });
    this.addNewContact(newContact);
  };
   //adding contact logic ends

  contactTest=(e)=>{
    this.setState({contactModalId:e.target.id});
  }
  
  render() {
    
    return (
      <div className="App">
        <AddForm 
        addFormModal = {this.state.addFormModal}
        addFormModalToggle = {this.addFormModalToggle}
        inputChange = {this.inputChange}
        onSubmitAddForm = {this.onSubmitAddForm}
        first = {this.state.first}
        last = {this.state.last}
        number = {this.state.number}
        email = {this.state.email}
        location = {this.state.location}
        clickOutsideAddFormModal = {this.clickOutsideAddFormModal}
        clearAddForm = {this.clearAddForm}
        />
          <div id = 'main'>
          <HeroProfile />
            <h1 id='contactCount'>
             {/* <span id='contactCount'>{this.state.contactList.length}</span>  */}
             Contacts 
            </h1>
          <ContactDisplay 
            contactList = {this.state.contactList}
            contactTest = {this.contactTest}
            contactModalId={this.state.contactModalId}
          />  
          <NavigationBar modalToggle = {this.addFormModalToggle}/>
           </div> 
        </div>
    );
  }
}

export default App;
