import React from 'react';
import './contactDisplay.scss';
import photo from './contact_1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import EditContactForm from './EditContactForm';



const ContactCard = ({
            first,
            last,
            number,
            email,
            location,
            id,
            contactModalId,
            contactCardModal,
            showContactCardModal,
            clickOutsideContactCardModal,
            editCurrentContact,
            clearAddForm,
            inputChange,
            firstInput,
            lastInput,
            numberInput,
            emailInput,
            locationInput,
            editContactForm,
            editContactFormToggle
        }) =>{
    return(   
        <div className = {contactCardModal && contactModalId == id?  'cardModal' : 'closeCardModal'} id ={id} onClick={clickOutsideContactCardModal}>
            <div className = 'card'>
                <div className = 'cardBanner'>
                    <p> <FontAwesomeIcon className='back' icon={faChevronLeft} onClick={showContactCardModal} /><a onClick={showContactCardModal}> Back</a>  </p>

                    <FontAwesomeIcon className='edit' onClick={editContactFormToggle} icon={faUserEdit} />
                </div>

                <input type='image' className='contactCardModalImg' src={photo} alt='current user profile picture'/>
                    <div className='cardContent' >
                        <div className='showContactContent' style={{ display: editContactForm?'none':'' }} >
                        <h1 className='name'>{first} {last}</h1>
                        <FontAwesomeIcon className='icon' icon={faMobileAlt} /><p>{number}</p>
                        <FontAwesomeIcon className='icon' icon={faEnvelope} /><p>{email}</p>
                        <FontAwesomeIcon className='icon' icon={faCity} /><p>{location}</p>
                        </div>
                        <div className='cardEdit' style={{ display: !editContactForm? 'none':'' }}  >
                            <EditContactForm 
                                first={first}
                                last={last}
                                number={number}
                                email={email}
                                location={location}
                                id={id}
                                editCurrentContact= {editCurrentContact}
                                clearAddForm={clearAddForm}
                                inputChange = {inputChange}
                                firstInput = {firstInput}
                                lastInput={lastInput}
                                numberInput={numberInput}
                                emailInput={emailInput}
                                locationInput={locationInput}
                            />
                        </div>
                </div>
              
            </div>
    </div>
    )}
export default ContactCard;