import React, { useEffect, useState } from 'react';
import Person from '../person/Person';
import Cart from '../cart/Cart';
import './Main.css'
// main start
const Main = () => {
// load data with featch
const [persons,setPerson]=useState([])
const[cart,setCart]=useState([])
useEffect(()=>{
    fetch(`Data/Data.json`)
    .then(response=>response.json())
    .then(data=>setPerson(data))
},[])

// onClickFunction
  const onClickFunction=(personObject)=>{
  setCart([...cart,personObject])
   
}


    return (
        <div className='main-area'>
           <div className='Team-member-area' data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="800">
               {
                   persons.map(person=><Person funtion={onClickFunction} key={person.key} person={person} />)
               }
           </div>
           <div className='cart-area'>
               <Cart cart={cart} />
           </div>
        </div>
    );
};

export default Main;