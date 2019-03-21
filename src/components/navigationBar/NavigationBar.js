import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import './navigationBar.scss';
import SearchField from './searchField/SearchField';


const NavigationBar = ({
    modalToggle,
    toggleFavoriteList,
    showFavorites,
    searchFieldToggle,
    addFormModal,
    searchField,
    inputChange
})=>{

    return(
        <div id='navBar'>
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
                <FontAwesomeIcon 
                id='searchBtn'
                icon={faSearch} 
                style={{color:searchField===''? 'white': 'rgb(32, 210, 241)'}}                   
                />
                <SearchField 
                id='search'
                searchField = {searchField}
                inputChange={inputChange}
                searchFieldToggle={searchFieldToggle}
                />
                </li>
            
            </ul>
            </div>
    )
}  
export default NavigationBar;