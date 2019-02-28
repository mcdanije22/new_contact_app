import React from 'react';
import './searchField.scss';

const SearchField = ({
    searchField,
    inputChange,
    searchFieldToggle
}) =>{
    return(
        <React.Fragment>
            <input type='text' id='searchFieldInput' 
            name='searchField' 
            value={searchField} 
            style={{display: searchFieldToggle? 'block' : 'none'}} 
            onChange={inputChange} 
            placeholder={'Search By Name'}
            />
            {console.log(searchField)}
        </React.Fragment>
    )
}
export default SearchField;