import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import './navigationBar.scss';


const NavigationBar = ({
    modalToggle,
    toggleSearchField,
    toggleFavoriteList,
    showFavorites,
    searchFieldToggle,
    addFormModal
})=>{

    return(
            <ul id ='nav'>
                <li>
                    <button 
                    type='button' 
                    id ='searchBtn' 
                    style={{color:searchFieldToggle?'#5299ED':'white'}}
                    onClick={toggleSearchField}>
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                </li>
                

                {/* <hr className='navLine'/> */}

                <li>
                    <button 
                    type='button' 
                    id ='addBtn' 
                    style={{color:addFormModal?'#28DC59':'white'}}
                    onClick={modalToggle}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                </li>

                <li>
                    <button 
                    type='button' 
                    id ='favBtn'
                    onClick = {toggleFavoriteList}
                    style={{color:showFavorites?'#F1C40F': 'white'}}>
                    <FontAwesomeIcon icon={faStar} />
                    </button>
                </li>
            </ul>
    )
}  
export default NavigationBar;