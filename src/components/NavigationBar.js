import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = ()=>{

    return(
        <div id ='nav'>
            <button type='submit' id ='menuBtn'>
            <FontAwesomeIcon icon={faBars} />
            </button>

           <input type='image' id='profileBtn' src='https://via.placeholder.com/150'/>

            {/* <img src='https://via.placeholder.com/150'> */}
        </div>
    )
}  
export default NavigationBar;