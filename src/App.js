import React, { Component } from 'react';
import './App.scss';
import NavigationBar from './components/navigationBar/NavigationBar';
import HeroProfile from './components/heroProfile/HeroProfile';
import ContactDisplay from './components/contacts/ContactDisplay';
import AddForm from './components/addForm/AddForm';

import { intialContactList } from './components/contacts/contactActions';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
  return {
     contactList: state.initialContactList.contactList
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onStartContactList: ()=>dispatch(intialContactList())
  }
}

class App extends Component {
  constructor(props){
    super(props);
  };

  componentDidMount(){
    this.props.onStartContactList();
  }

  render() {
    
    return (
      <div className="App">
        <AddForm />
          <div id = 'main'>
          <HeroProfile />
            <h1 id='contactCount'>
             <span id='contactCount'>{this.props.contactList.length}</span> Contacts 
            </h1>
          <ContactDisplay 
            contactList = {this.props.contactList}
          />  
          <NavigationBar />
           </div> 
        </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
