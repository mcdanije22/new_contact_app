import React from 'react';
import './searchField.scss';




const SearchField = ({
    searchField,
    inputChange,
}) =>{
    return(
        <React.Fragment >
            <input 
            type='text' 
            id='searchFieldInput' 
            name='searchField' 
            value={searchField} 
            onChange={inputChange} 
            placeholder={'Search By Name...'}
            />
       
        </React.Fragment>
    )
}
export default SearchField;


