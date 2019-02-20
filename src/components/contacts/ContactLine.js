import React from 'react';
import photo from './contact_1.jpg';
import ContactCard from './ContactCard';

const ContactLine = ({contact})=>{
const {first, last, number, email, area} = contact;
    return(
       <React.Fragment>
        <ContactCard 
        first = {first}
        last = {last}
        number = {number}
        email = {email}
        area = {area}
        />
        <input type='image' className='card' src={photo} alt='current user profile picture'/>
            <h2>{first} {last}</h2>
            <hr />
       </React.Fragment>
    )
}  
export default ContactLine;

