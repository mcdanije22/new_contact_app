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
    inputChange
})=>{
    return(
        <React.Fragment>
            <form className='inputContactGroup'>
                <input type='text' name='first' placeholder={first} className='editInput'  onChange={inputChange} />
                <input type='text' name='last' placeholder={last} className='editInput' onChange={inputChange} />
                <input type='text' name='number' placeholder={number} className='editInput'  onChange={inputChange} />
                <input type='text' name='email' placeholder={email} className='editInput' onChange={inputChange} />
                <input type='text' name='location' placeholder={location} className='editInput' onChange={inputChange} />
                <br/>
                <button type='button' className='editCancel'>Cancel</button>
                <button type='submit' className='submitEditButton' onClick={editCurrentContact}>Save</button>
            </form>
        </React.Fragment>
    )
};
export default EditContactForm;