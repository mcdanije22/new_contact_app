import React from 'react';
import ContactLine from './ContactLine';
import './contactDisplay.scss';

const ContactDisplay = ({
    contactList,
    searchField,
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
    editContactFormToggle,
    deleteContact,
    addToFavrorites,
    showFavorites,
    searchFieldToggle,
    screenWidth
})=>{
    return(
       <div id='contactArea'>
    {contactList.filter((contacts)=>{
        return(  
         contacts.first.toLowerCase().includes(searchField.toLowerCase()) 
         ||
         contacts.last.toLowerCase().includes(searchField.toLowerCase())
         )
       }).map((person,i)=>{
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
                deleteContact={deleteContact}
                addToFavrorites={addToFavrorites}
                showFavorites={showFavorites}
                searchFieldToggle={searchFieldToggle}
                screenWidth={screenWidth}
                    />
                })
            } 
       </div>
    )
}  
export default ContactDisplay;