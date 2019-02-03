import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus, faStar } from '@fortawesome/free-solid-svg-icons'


const NavigationBar = ()=>{

    return(
        <div id ='nav'>
            <button type='submit' id ='searchBtn'>
            <FontAwesomeIcon icon={faSearch} />
            </button>

            <button type='submit' id ='addBtn'>
            <FontAwesomeIcon icon={faUserPlus} />
            </button>

            <button type='submit' id ='favBtn'>
            <FontAwesomeIcon icon={faStar} />
            </button>

        </div>
    )
}  
export default NavigationBar;