import React from 'react';
import photo from './contact_1.jpg';
import ContactCard from './ContactCard';

const ContactLine = ({contact,id,contactTest,contactModalId})=>{
const {first, last, number, email, area} = contact;

    return(
       <React.Fragment>
        <ContactCard 
        first = {first}
        last = {last}
        number = {number}
        email = {email}
        area = {area}
        id={id}
        contactModalId = {contactModalId}
        />  
        <input onClick={contactTest} type='image' id={id} className='mobileList' src={photo} alt='current user profile picture'/>
            <h2>{first} {last}</h2>
            <hr />

       </React.Fragment>
    )
}  
export default ContactLine;

