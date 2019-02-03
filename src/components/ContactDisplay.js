import React from 'react';
import ContactCard from './ContactCard';

const ContactDisplay = ({contactList})=>{

    return(
       <div id='contactArea'>
            {contactList.map((person,i)=>{
                return <ContactCard 
                key={i} 
                contact={person}   
                    />
                })
            }
       </div>
    )
}  
export default ContactDisplay;