import React from 'react';
import './Cart.css'
// font awesome init start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
// font awesome init end
import Name from '../person-name-show/Name';

const Cart = (props) => {
    let total=0
    for(const cart of props.cart){
        total+=cart.salary
    }
    return (
        <div className='cart-details' data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="800">
            <h2 className='total-member'><FontAwesomeIcon icon={faUser} /> member added : {props.cart.length}</h2>
            <h3 className='total-cost'>total cost : <span>$ {total}</span></h3>
           {
               props.cart.map((cartObject)=><Name key={cartObject.key} name={cartObject}/>)
           }
        </div>
    );
};

export default Cart;