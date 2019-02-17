import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import './navigationBar.scss';


const NavigationBar = ({modalToggle})=>{

    return(
        <div id ='nav'>
            <button type='button' id ='searchBtn'>
            <FontAwesomeIcon icon={faSearch} />
            </button>

            <button type='button' id ='addBtn' onClick={modalToggle}>
            <FontAwesomeIcon icon={faUserPlus} />
            </button>
            

            <button type='button' id ='favBtn'>
            <FontAwesomeIcon icon={faStar} />
            </button>

        </div>
    )
}  
export default NavigationBar;