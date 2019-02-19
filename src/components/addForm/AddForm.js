import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './addForm.scss'

   const AddForm = ({
            addFormModal,
            modalToggle, 
            inputChange, 
            onSubmitAddForm, 
            clickOutsideModal,
            clearAddForm,
            first,
            last,
            number,
            email,
            location
        })=>{ 
       return(
        <div id={addFormModal?'addFormModel': 'closeAddFormModel'} onClick={clickOutsideModal}>
            <div id='addForm'>
                <div id='addFormBanner'>
                    <button type = 'button' id ='closeBtn'><FontAwesomeIcon icon={faTimes} onClick={modalToggle}/></button> <h2>ADD CONTACT</h2> 
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
                    <button type='button' id ='clearBtn' onClick = {clearAddForm}>Clear</button>
                </form>
         </div>
        </div>
        
        )
   }

  
export default AddForm;