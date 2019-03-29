import React, { Component } from 'react';
import './App.scss';
import NavigationBar from './components/navigationBar/NavigationBar';
import ContactDisplay from './components/contacts/ContactDisplay';
import AddForm from './components/addForm/AddForm';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contactList: [
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',location:'Mount Morris, Ny', starred:false},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',location:'Mount Morris, Ny', starred:true},
        {first:'Myles',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',location:'Mount Morris, Ny', starred:true},
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',location:'Mount Morris, Ny', starred:false},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',location:'Mount Morris, Ny', starred:true},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',location:'Mount Morris, Ny', starred:false}
      ],
      first:'',
      last: '',
      number: '',
      email:'',
      location:'',
      addFormModal:false,
      contactCardModal:false,
      contactModalId:'',
      editContactForm:false,
      searchField:'',
      searchFieldToggle:false,
      showFavorites:false,
      screenWidth:''
    }
  };

  componentWillMount(){
    const currentContactList = this.state.contactList;
    const sortedContactList = currentContactList.sort((a,b)=>{
    if(a.first.toLowerCase() > b.first.toLowerCase()) return 1;
    if(a.first.toLowerCase() < b.first.toLowerCase()) return -1;
    })
    this.setState({contactList:sortedContactList})
    const local = JSON.parse(localStorage.getItem('contact'));
    if(local !== null){
      this.setState({contactList:local});
    }
     }

     componentDidMount() {
      this.updateScreenWidth();
      window.addEventListener("resize", this.updateScreenWidth);
      
    }
    

  updateScreenWidth=()=>{
    if(window.innerWidth >= 1115){
      this.setState({screenWidth:'large', contactCardModal:true})
    }else{
      this.setState({screenWidth:'small', contactCardModal:false})
    }
  }

  addToLocalStorage = (newContact) =>{
    if(localStorage.getItem('contact') == null){
      localStorage.setItem('contact', JSON.stringify([...this.state.contactList]));
    } else{
      const oldLocalStorage = JSON.parse(localStorage.getItem('contact'));
      localStorage.setItem('contact', JSON.stringify([...oldLocalStorage,newContact].sort((a,b)=>{
        if(a.first.toLowerCase() > b.first.toLowerCase()) return 1;
        if(a.first.toLowerCase() < b.first.toLowerCase()) return -1;
        })));
    }
  };

  /******** 
   * add form modal logic 
   */
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
/******** 
   * add form modal logic end
   */

   /******** 
   * adding contact logic 
   */
  inputChange = (e) =>{
    this.setState({[e.target.name]:e.target.value});
  };

  addNewContact = (newContact) =>{
    if(this.state.first === '' || this.state.last === '' || this.state.number === '' || this.state.email === '' || this.state.location === ''){
      alert('Please fill in all fields');
    }else{
      //putting new contacts in order
    const newContactList = [...this.state.contactList, newContact].sort((a,b)=>{
      if(a.first.toLowerCase() > b.first.toLowerCase()) return 1;
      if(a.first.toLowerCase() < b.first.toLowerCase()) return -1;
      });
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
      location:'',
      searchField:''
    });
  };

  onSubmitAddForm = (e) =>{
    e.preventDefault();
    const newContact = Object.assign({}, {
      first:this.state.first, 
      last:this.state.last, 
      number:this.state.number, 
      email:this.state.email,
      location:this.state.location,
      starred:false
    });
    this.addNewContact(newContact);
  };
 /******** 
   * adding contact logic ends
   */



  /******** 
   * logic for toggling contact card modal 
   */
  showContactCardModal=(e)=>{
    this.setState({contactModalId:e.target.id}, ()=>{
      console.log(this.state.contactModalId);
    });
    this.setState({contactCardModal:this.state.contactCardModal?false:true},()=>{
      console.log(this.state.contactCardModal)
    })
    this.setState({editContactForm:false})
  };



  clickOutsideContactCardModal = (e)=>{
    if(e.target.className === 'cardModal'){
      this.setState({contactCardModal:this.state.contactCardModal?false:true, searchFieldToggle:false})
      this.clearAddForm();
      }   
    };
 /******** 
   * logic for toggling contact card modal ends
   */

  /********
   * edit current contact
  */

  editCurrentContact=(e)=>{
    e.preventDefault();
    const newContact = Object.assign({}, {
      
      first:this.state.first || this.state.contactList[this.state.contactModalId].first, 
      last:this.state.last || this.state.contactList[this.state.contactModalId].last, 
      number:this.state.number || this.state.contactList[this.state.contactModalId].number, 
      email:this.state.email || this.state.contactList[this.state.contactModalId].email,
      location:this.state.location || this.state.contactList[this.state.contactModalId].location,
      starred: this.state.contactList[this.state.contactModalId].starred
    });
    
    let editedContactList = [...this.state.contactList];
    editedContactList[this.state.contactModalId] = newContact;
    editedContactList = editedContactList.sort((a,b)=>{
      if(a.first.toLowerCase() > b.first.toLowerCase()) return 1;
      if(a.first.toLowerCase() < b.first.toLowerCase()) return -1;
      })
    this.setState({contactList:editedContactList},()=>{
    this.editLocalStorage(newContact);
    });


    this.setState({contactCardModal:this.state.contactCardModal?false:true},()=>{
      console.log(this.state.contactCardModal)
    });
    this.clearAddForm();
    //new logic
    this.setState({editContactForm: this.state.editContactForm?false:true, contactModalId:''})
  }

  
  editLocalStorage = (newContact)=>{
    if(localStorage.getItem('contact') == null){
      localStorage.setItem('contact', JSON.stringify([...this.state.contactList]));
    } else{
      let oldLocalStorage = JSON.parse(localStorage.getItem('contact'));
      oldLocalStorage[this.state.contactModalId] = newContact
      oldLocalStorage = oldLocalStorage.sort((a,b)=>{
        if(a.first.toLowerCase() > b.first.toLowerCase()) return 1;
        if(a.first.toLowerCase() < b.first.toLowerCase()) return -1;
        })
      localStorage.setItem('contact', JSON.stringify([...oldLocalStorage]));
    }
  }

 

  editContactFormToggle=(id)=>{
    this.setState({contactModalId:id,editContactForm: this.state.editContactForm?false:true},()=>{
    console.log(this.state.contactModalId)
  });  
  }

 

 /********
   * edit current contact end
  */

  /****** 
   * searchField logic
  */
  searchFieldInputChange=(e)=>{
    this.setState({searchField:e.target.value})
  };

  toggleSearchField=()=>{
    this.setState({
      searchFieldToggle: this.state.searchFieldToggle?false:true,
      searchField:''
    })
  }

   /****** 
   * searchField logic end
  */

/*
* logic to delete contact and update local storage
*/
  deleteContact=(id)=>{
    console.log(id);
    const contacts = this.state.contactList;
    contacts.splice(id, 1);
    this.setState({contactList: contacts, contactCardModal:false});

    localStorage.getItem('contact')
    localStorage.setItem('contact', JSON.stringify([...this.state.contactList]));
  }
/*
* logic to delete contact and update local storage ends
*/

/*
* logic for favorite list
*/

toggleFavoriteList=()=>{
  this.setState({showFavorites: this.state.showFavorites?false:true})
}

addToFavrorites=(id)=>{
const contacts = this.state.contactList;
contacts[id].starred = contacts[id].starred ? false : true;
this.setState({contactList:contacts});

localStorage.getItem('contact')
localStorage.setItem('contact', JSON.stringify([...this.state.contactList]));
console.log(contacts)
}

/*
* logic for favorite list ends
*/
  
  render() {
    const {contactList} = this.state;
    const favoriteList = contactList.filter(contact => contact.starred === true);
    return (
      <div className="App" >
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
           
          <NavigationBar 
            modalToggle = {this.addFormModalToggle}
            toggleSearchField={this.toggleSearchField}  
            toggleFavoriteList = {this.toggleFavoriteList}
            showFavorites = {this.state.showFavorites}
            searchFieldToggle={this.state.searchFieldToggle}
            addFormModal={this.state.addFormModal}
            searchField = {this.state.searchField}
            inputChange={this.inputChange}
          />
        
          <ContactDisplay 
            contactList = {this.state.showFavorites?favoriteList:this.state.contactList}
            searchField={this.state.searchField}
            showContactCardModal = {this.showContactCardModal}
            contactModalId={this.state.contactModalId}
            contactCardModal={this.state.contactCardModal}
            clickOutsideContactCardModal = {this.clickOutsideContactCardModal}
            editCurrentContact = {this.editCurrentContact}
            inputChange = {this.inputChange}
            clearAddForm={this.clearAddForm}
            firstInput={this.state.first}
            lastInput={this.state.last}
            numberInput={this.state.number}
            emailInput={this.state.email}
            locationInput={this.state.location}
            editContactForm={this.state.editContactForm}
            editContactFormToggle={this.editContactFormToggle}
            deleteContact={this.deleteContact}
            showFavorites={this.state.showFavorites}
            addToFavrorites={this.addToFavrorites} 
            showFavorites={this.state.showFavorites}
            searchFieldToggle={this.state.searchFieldToggle}
            screenWidth={this.state.screenWidth}
          /> 
         
       
           </div> 
        </div>
    );
  }
}

export default App;
