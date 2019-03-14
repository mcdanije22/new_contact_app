import React from 'react';
import './searchField.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const SearchField = ({
    searchField,
    inputChange,
    searchFieldToggle,
}) =>{
    const icon = <FontAwesomeIcon id ='searchBtn' icon={faSearch} />
    return(
        <React.Fragment >
            <input 
            type='text' 
            id='searchFieldInput' 
            name='searchField' 
            value={searchField} 
            onChange={inputChange} 
            placeholder={`${icon}Search By Name...`}
            />
            {console.log(searchField)}
       
        </React.Fragment>
    )
}
export default SearchField;


