import React from 'react';
import photo from './contact_1.jpg';
import './starredList.scss';


const StarredList=({contactList})=>{
    return(
        <div id='StarredList'>
        {/* <input type='image' className='starredContact' src={photo} alt='current user profile picture'/>
        <input type='image' className='starredContact' src={photo} alt='current user profile picture'/>
        <input type='image' className='starredContact' src={photo} alt='current user profile picture'/>
        <input type='image' className='starredContact' src={photo} alt='current user profile picture'/>
        <input type='image' className='starredContact' src={photo} alt='current user profile picture'/>
        <input type='image' className='starredContact' src={photo} alt='current user profile picture'/>
        <input type='image' className='starredContact' src={photo} alt='current user profile picture'/> */}
        {
            contactList.map((contact,i)=>{
                {console.log(contact.starred, contact.first)}
                if(contact.starred === true){
                return <h1 key ={i}>{contact.first}</h1>
                }
        })
        }

        </div>
    )
}
export default StarredList; 