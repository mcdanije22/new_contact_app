import React from 'react';
import photo from './contact_photos/contact_1.jpg';


const HeroProfile = ()=>{

    return(
        <div id ='profile'>           
           <input type='image' id='profileBtn' src={photo} alt='current user profile picture'/>
        </div>
    )
}  
export default HeroProfile;