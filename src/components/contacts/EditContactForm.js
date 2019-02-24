import React from 'react';
import './contactDisplay.scss';

const EditContactForm = ({
    first,
    last,
    number,
    email,
    location,
    id
})=>{

    return(
        <React.Fragment>
            <form className='inputContactGroup'>
                <input type='text' name='first' placeholder={first} className='editInput' />
                <input type='text' name='last' placeholder={last} className='editInput' />
                <input type='text' name='number' placeholder={number} className='editInput' />
                <input type='text' name='email' placeholder={email} className='editInput' />
                <input type='text' name='location' placeholder={location} className='editInput' />
                <br/>
                <button type='button' className='editCancel'>Cancel</button>
                <button type='submit' className='submitEditButton'>Save</button>
            </form>
        </React.Fragment>
    )
};
export default EditContactForm;