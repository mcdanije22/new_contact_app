import React from 'react';
import './contactDisplay.scss';
import photo from './contact_1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';



const ContactCard = ({
            first,
            last,
            number,
            email,
            area
        }) =>{
    return(
    <div className = 'cardModal'>
        <div className = 'card'>
        <div className = 'cardBanner'>
        {/* <FontAwesomeIcon className='delete' icon={faTrash} /> */}
        <p> <FontAwesomeIcon className='back' icon={faChevronLeft} /> Back </p>
        <FontAwesomeIcon className='edit' icon={faUserEdit} />
        </div>
        
        <input type='image' className='contactCardModalImg' src={photo} alt='current user profile picture'/>
            <div className='cardContent'>
                <h1>{first} {last}</h1>
                <FontAwesomeIcon className='icon' icon={faMobileAlt} /><p>{number}</p>
                <FontAwesomeIcon className='icon' icon={faEnvelope} /><p>{email}</p>
                <FontAwesomeIcon className='icon' icon={faCity} /><p>{area}</p>
                </div>
            </div>
    </div>
    )}
export default ContactCard;