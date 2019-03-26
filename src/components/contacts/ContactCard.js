import React from 'react';
import './contactDisplay.scss';
import photo from './contact_1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMobileAlt,
    faEnvelope,
    faCity,
    faChevronLeft,
    faUserEdit,
    faTrash,
    faStar 
} from '@fortawesome/free-solid-svg-icons';
import EditContactForm from './EditContactForm';



const ContactCard = ({
            first,
            last,
            number,
            email,
            location,
            id,
            starred,
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
            editContactFormToggle,
            deleteContact,
            addToFavrorites,
            showFavorites,
            searchFieldToggle,
            screenWidth
        }) =>{
            const hideBtn = showFavorites||searchFieldToggle?'none':'block'; 
    return(   
        <div className = {contactCardModal && contactModalId == id || screenWidth === 'large'?  'cardModal' : 'closeCardModal'} id ={id} onClick={clickOutsideContactCardModal}>
            <div className = 'card'>
                <div className = 'cardBanner'>
                    <p> <FontAwesomeIcon className='back'  icon={faChevronLeft} onClick={showContactCardModal} /><a onClick={showContactCardModal}> Back</a>  </p>
                    <FontAwesomeIcon 
                    className='star' 
                    onClick={addToFavrorites} 
                    style=
                    {{
                    color:starred?'#F1C40F':'white', 
                    display:hideBtn
                    }} 
                    icon={faStar} />
                    <FontAwesomeIcon 
                    className='edit' 
                    style={{display:hideBtn}}
                    onClick={editContactFormToggle} 
                    icon={faUserEdit} />
                    <FontAwesomeIcon 
                    className='delete' 
                    style={{display:hideBtn}}
                    onClick={deleteContact} 
                    icon={faTrash} />
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