import React from 'react';
import './contactDisplay.scss';

const EditContactForm = ({
    first,
    last,
    number,
    email,
    location,
    id,
    editCurrentContact,
    clearAddForm,
    inputChange,
    firstInput,
    lastInput,
    numberInput,
    emailInput,
    locationInput
})=>{
    return(
        <React.Fragment>
            <form className='inputContactGroup'>
                <input type='text' name='first' placeholder={first} value={firstInput} className='editInput'  onChange={inputChange} />
                <input type='text' name='last' placeholder={last} value={lastInput} className='editInput' onChange={inputChange} />
                <input type='text' name='number' placeholder={number} value={numberInput} className='editInput'  onChange={inputChange} />
                <input type='text' name='email' placeholder={email} value={emailInput} className='editInput' onChange={inputChange} />
                <input type='text' name='location' placeholder={location} value={locationInput} className='editInput' onChange={inputChange} />
                <br/>
                <button type='button' className='editCancel' onClick={clearAddForm}>Clear</button>
                <button type='submit' className='submitEditButton' onClick={editCurrentContact}>Save</button>
            </form>
        </React.Fragment>
    )
};
export default EditContactForm;