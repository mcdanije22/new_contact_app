import React from 'react';
import './addForm.scss'

  
   const AddForm = ()=>{ 
       return(
        <div id= 'closeAddFormModel'>
            <div id='addForm'>
                <div id='addFormBanner'>
                    <h2>ADD CONTACT</h2>
                </div>
                <form id = 'inputGroup'>
                    <h3 className = 'inputName'>First Name</h3>
                        <input type='text' name='first' placeholder='e.g. John' className='addInput'/>
                    <h3 className = 'inputName'>Last Name</h3>
                        <input type='text' name='last' placeholder='e.g. Smith'  className='addInput'/>
                    <h3 className = 'inputName'>Phone Number</h3>
                        <input type='text' name='number' placeholder='555-555-5555'  className='addInput'/>
                    <h3 className = 'inputName'>Email Address</h3>
                        <input type='text' name='email' placeholder='johnsmith@gmail.com'  className='addInput'/>
                    <h3 className = 'inputName'>Location</h3>
                        <input type='text' name='area' placeholder='Rochester,Ny'  className='addInput'/>
                    <br/>
                    <button type='submit' id ='addtBtn'>Add Contact</button>
                    <button type='submit' id ='clearBtn'>Clear</button>
                </form>
         </div>
        </div>
        
        )
   }

  
export default AddForm;