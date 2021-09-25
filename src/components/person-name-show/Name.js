import React from 'react';
import './Name.css'
const Name = (props) => {
    const{name,img}=props.name
 
    return (
        <div className='small-cart'>
            <img src={img} alt="" />
          <div className='small-cart-detils'>
          <p>name: {name}</p>
           
          </div>
            
        </div>
    );
};

export default Name;