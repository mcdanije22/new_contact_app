import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import './navigationBar.scss';
import SearchField from './searchField/SearchField';


const NavigationBar = ({
    modalToggle,
    toggleSearchField,
    toggleFavoriteList,
    showFavorites,
    searchFieldToggle,
    addFormModal,
    searchField,
    inputChange
})=>{

    return(
            <ul id ='nav'>
         <li id='favBtnOrder'>
                    <button 
                    type='button' 
                    id ='favBtn'
                    onClick = {toggleFavoriteList}
                    style={{color:showFavorites?'#F1C40F': 'white'}}>
                    <FontAwesomeIcon icon={faStar} />
                    </button>
                </li>
             

                <li id='contactHeaderOrder'>
               
               <h1 id='contactHeader'>Contacts</h1>    
                </li>
                <li id='addBtnOrder'>
                    <button 
                    type='button' 
                    id ='addBtn' 
                    style={{color:addFormModal?'#28DC59':'white'}}
                    onClick={modalToggle}>
                    <FontAwesomeIcon icon={faPlus} />
                    </button>
                </li>  
                <li id='searchBarOrder'>
                <SearchField 
                id='search'
                searchField = {searchField}
                inputChange={inputChange}
                searchFieldToggle={searchFieldToggle}
                />
                </li>
                <li>
                <FontAwesomeIcon 
                id='searchBtn'
                icon={faSearch}    
                />
            </li>
            </ul>
    )
}  
export default NavigationBar;