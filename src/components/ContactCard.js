import React from 'react';
import photo from './contact_photos/contact_1.jpg';

const ContactCard = ({contact})=>{
const {first, last, number, email, area, instagram, facebook, linkedin,twitter} = contact;
    return(
       <React.Fragment>
        <input type='image' className='card' src={photo} alt='current user profile picture'/>
            <h2>{first} {last}</h2>
            <hr />
       </React.Fragment>
    )
}  
export default ContactCard;

