import React from 'react';
// import Link from 'next/link';
// import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
// import { TiDeleteOutline } from 'react-icons/ti';
// import toast from 'react-hot-toast';

// import { useStateContext } from '../context/StateContext';
// import { urlFor } from '../lib/client';
// import getStripe from '../lib/getStripe';

const Cart = () => {
  // const cartRef = useRef();
  // const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch('/api/stripe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if(response.statusCode === 500) return;
    
  //   const data = await response.json();

  //   toast.loading('Redirecting...');

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // }

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
          Cart
      </div>
    </div>
  )
}

export default Cart