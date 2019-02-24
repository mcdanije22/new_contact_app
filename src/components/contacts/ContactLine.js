import React from 'react';
import photo from './contact_1.jpg';
import ContactCard from './ContactCard';

const ContactLine = ({
    contact,
    id,
    showContactCardModal,
    contactModalId,
    contactCardModal,
    clickOutsideContactCardModal
})=>{
const {first, last, number, email, location} = contact;

    return(
       <React.Fragment>
        <ContactCard 
        first = {first}
        last = {last}
        number = {number}
        email = {email}
        location = {location}
        id={id}
        contactModalId = {contactModalId}
        contactCardModal = {contactCardModal}
        showContactCardModal = {showContactCardModal}
        clickOutsideContactCardModal = {clickOutsideContactCardModal}
        />  
        <input onClick={showContactCardModal} type='image' id={id} className='mobileList' src={photo} alt='current user profile picture'/>
            <h2>{first} {last}</h2>
            <hr />
       </React.Fragment>
    )
}  
export default ContactLine;

