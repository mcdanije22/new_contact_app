import React from 'react';
import ContactLine from './ContactLine';
import './contactDisplay.scss';

const ContactDisplay = ({
    contactList,
    showContactCardModal,
    contactModalId, 
    contactCardModal,
    clickOutsideContactCardModal
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
                    />
                })
            }
       </div>
    )
}  
export default ContactDisplay;