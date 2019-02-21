import React from 'react';
import ContactLine from './ContactLine';
import './contactDisplay.scss';

const ContactDisplay = ({contactList,contactTest,contactModalId})=>{

    return(
       <div id='contactArea'>
            {contactList.map((person,i)=>{
                return <ContactLine 
                key={i} 
                contact={person} 
                id = {i}
                contactTest = {contactTest}
                contactModalId={contactModalId}
                    />
                })
            }
       </div>
    )
}  
export default ContactDisplay;