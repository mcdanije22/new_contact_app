import React from 'react';
import ContactLine from './ContactLine';
import './contactDisplay.scss';

const ContactDisplay = ({
    contactList,
    showContactCardModal,
    contactModalId, 
    contactCardModal,
    clickOutsideContactCardModal,
    editCurrentContact,
    inputChange,
    firstInput,
    lastInput,
    numberInput,
    emailInput,
    locationInput,
    clearAddForm,
    editContactForm,
    editContactFormToggle
})=>{

    return(
       <div id='contactArea'>
            {contactList.map((person,i)=>{
                return <ContactLine 
                key={i} 
                contact={person} 
                id = {i}
                showContactCardModal = {showContactCardModal}
                contactModalId={contactModalId}
                contactCardModal = {contactCardModal}
                clickOutsideContactCardModal = {clickOutsideContactCardModal}
                editCurrentContact = {editCurrentContact}
                clearAddForm={clearAddForm}
                inputChange = {inputChange}
                firstInput = {firstInput}
                lastInput={lastInput}
                numberInput={numberInput}
                emailInput={emailInput}
                locationInput={locationInput}
                editContactForm={editContactForm}
                editContactFormToggle={editContactFormToggle}
                    />
                })
            }
       </div>
    )
}  
export default ContactDisplay;