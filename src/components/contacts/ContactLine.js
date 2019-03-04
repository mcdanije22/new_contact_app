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
    deleteContact
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
        editContactFormToggle={editContactFormToggle}
        deleteContact={deleteContact.bind(this,id)}
        />  
            <div >
                <input onClick={showContactCardModal} type='image' id={id} className='mobileList' src={photo} alt='current user profile picture'/>
                <h2>{first} {last}</h2>
            </div>
        <hr />
       </React.Fragment>
    )
}  
export default ContactLine;

