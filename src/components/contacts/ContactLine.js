import React from 'react';
import photo from './contact_1.jpg';
import ContactCard from './ContactCard';

const ContactLine = ({
    contact,
    id,
    showContactCardModal,
    contactModalId,
    contactCardModal,
    clickOutsideContactCardModal,
    editCurrentContact,
    inputChange,
    clearAddForm,
    firstInput,
    lastInput,
    numberInput,
    emailInput,
    locationInput,
    editContactForm,
    editContactFormToggle,
    deleteContact,
    addToFavrorites,
    showFavorites,
    searchFieldToggle,
    screenWidth
})=>{
const {first, last, number, email, location, starred} = contact;
    return(
       <React.Fragment>
        <ContactCard 
        first = {first}
        last = {last}
        number = {number}
        email = {email}
        location = {location}
        id={id}
        starred={starred}
        contactModalId = {contactModalId}
        contactCardModal = {contactCardModal}
        showContactCardModal = {showContactCardModal}
        clickOutsideContactCardModal = {clickOutsideContactCardModal}
        editCurrentContact = {editCurrentContact}
        inputChange = {inputChange}
        clearAddForm={clearAddForm}
        firstInput = {firstInput}
        lastInput={lastInput}
        numberInput={numberInput}
        emailInput={emailInput}
        locationInput={locationInput}
        editContactForm={editContactForm}
        editContactFormToggle={editContactFormToggle.bind(this,id)}
        deleteContact={deleteContact.bind(this,id)}
        addToFavrorites={addToFavrorites.bind(this,id)}
        showFavorites={showFavorites}
        searchFieldToggle={searchFieldToggle}
        screenWidth={screenWidth}
        />  
            <div style={{display:screenWidth === 'large'?'none':'block'}}>
                <input 
                onClick={showContactCardModal} 
                type='image' 
                id={id} 
                className='mobileList' 
                src={photo} 
                alt='current user profile picture'
                />
                <h2>{first} {last}</h2>
                <hr />
            </div>
       </React.Fragment>
    )
}  
export default ContactLine;

