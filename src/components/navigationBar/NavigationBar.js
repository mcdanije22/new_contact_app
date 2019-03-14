import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import './navigationBar.scss';
import SearchField from './searchField/SearchField'


const NavigationBar = ({
    modalToggle,
    toggleSearchField,
    toggleFavoriteList,
    showFavorites,
    searchFieldToggle,
    addFormModal,
    searchField,
    inputChange,
})=>{

    return(
            <ul id ='nav'>
                <li>
                <SearchField
                searchField = {searchField}
                inputChange={inputChange}
                searchFieldToggle={searchFieldToggle}
                />
                   
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