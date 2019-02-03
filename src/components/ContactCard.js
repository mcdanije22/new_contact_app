import React from 'react';

const ContactCard = ({contact})=>{
const {first, last, number, email, area, instagram, facebook, linkedin,twitter} = contact;
    return(
       <React.Fragment>
        <input type='image' className='card' src='https://via.placeholder.com/120' alt='current user profile picture'/>
            <h2>{first} {last}</h2>
            {console.log(first)}
            <hr />
       </React.Fragment>
    )
}  
export default ContactCard;