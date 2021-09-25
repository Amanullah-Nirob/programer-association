import React from 'react';
import './Person.css'
// font awesome init start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// font awesome init end
const Person = (props) => {
    // destructuring use hear
    const{img,name,age,creator,Nationality,salary}=props.person
    return (
        <div className='single-person'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="800">
        <div className="person-img"><img src={img} alt="" /></div>

        <div className='person-details'>
          <h3>name : <span>{name}</span></h3>
           <h3>age : <span>{age}</span></h3>
           <h3>creator : <span>{creator}</span></h3>
           <h3>Nationality : <span>{Nationality}</span></h3>
           <h3>salary : <span>${salary}</span></h3>
           </div>

            <div className='person-select-button'>
               <button onClick={()=>props.funtion(props.person)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        <div className='other-linkables-image'>
           <img alt='' src="https://img.icons8.com/fluency/30/000000/facebook-new.png"/>
           <img alt='' src="https://img.icons8.com/fluency/30/000000/twitter.png"/>
           <img alt='' src="https://img.icons8.com/fluency/30/000000/instagram-new.png"/>
           <img alt='' src="https://img.icons8.com/color/30/000000/google-logo.png"/>
          
        </div>

        </div>
    );
};

export default Person;