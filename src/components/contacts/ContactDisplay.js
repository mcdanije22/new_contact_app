import React from 'react';
import ContactLine from './ContactLine';
import './contactDisplay.scss';

const ContactDisplay = ({contactList})=>{

    return(
       <div id='contactArea'>
            {contactList.map((person,i)=>{
                return <ContactLine 
                key={i} 
                contact={person}   
                    />
                })
            }
       </div>
    )
}  
export default ContactDisplay;