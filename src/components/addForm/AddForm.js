import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './addForm.scss'

  
   const AddForm = ({
            addFormModal,
            modalToggle, 
            inputChange, 
            onSubmitAddForm, 
            first,
            last,
            number,
            email,
            location
                        })=>{ 
       return(
        <div id={addFormModal?'addFormModel': 'closeAddFormModel' }>
            <div id='addForm'>
                <div id='addFormBanner'>
                    <button type = 'button' id ='closeBtn' onClick={modalToggle}><FontAwesomeIcon icon={faTimes} /></button> <h2>ADD CONTACT</h2> 
                </div>
                <form id = 'inputGroup'>
                    <h3 className = 'inputName'>First Name</h3>
                        <input type='text' name='first' placeholder='e.g. John' value={first} className='addInput' onChange={inputChange}/>
                    <h3 className = 'inputName'>Last Name</h3>
                        <input type='text' name='last' placeholder='e.g. Smith' value={last} className='addInput' onChange={inputChange}/>
                    <h3 className = 'inputName'>Phone Number</h3>
                        <input type='text' name='number' placeholder='555-555-5555' value={number} className='addInput' onChange={inputChange}/>
                    <h3 className = 'inputName'>Email Address</h3>
                        <input type='text' name='email' placeholder='johnsmith@gmail.com' value={email} className='addInput' onChange={inputChange}/>
                    <h3 className = 'inputName'>Location</h3>
                        <input type='text' name='location' placeholder='Rochester,Ny' value={location} className='addInput' onChange={inputChange}/>
                    <br/>
                    <button type='submit' id ='addtBtn' onClick = {onSubmitAddForm}>Add Contact</button>
                    <button type='submit' id ='clearBtn'>Clear</button>
                </form>
         </div>
        </div>
        
        )
   }

  
export default AddForm;