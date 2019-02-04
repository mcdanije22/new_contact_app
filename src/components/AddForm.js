import React from 'react';

const AddForm = ()=>{
    return(
        <div id ='addFormModel'>
            <div id='addForm'>
                <form>
                    <input type='text' name='first' className='addInput'/>
                    <input type='text' name='last' className='addInput'/>
                    <input type='text' name='number' className='addInput'/>
                    <input type='text' name='email' className='addInput'/>
                    <input type='text' name='area' className='addInput'/>
                    <input type='text' name='instagram' className='addInput'/>
                    <input type='text' name='facebook' className='addInput'/>
                    <input type='text' name='linkedin' className='addInput'/>
                    <input type='text' name='twitter' className='addInput'/>
                </form>
         </div>
        </div>
    )
}  
export default AddForm;