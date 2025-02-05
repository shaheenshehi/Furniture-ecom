// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faStar,faStarHalfStroke,faCartShopping} from '@fortawesome/free-solid-svg-icons'
// import './Styles/Shop.css'

// const Shop = () => {
//   return (
//     <div>
//         <section className="shop" id='shop'>
//     <div className="heading">
//       <span>New Arrival</span>
//       <h2>Shop Now</h2>
//       </div>
//       <div className="shop-container">
//         {/* box1 */}
//         <div className="box">
//           <div className="box-img">
//             <img src="img/p1.jpg" alt="#" />
//           </div>
//           <div className="title-price">
//             <h3>Gray Chair</h3>
//             <div className="stars">
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStarHalfStroke} />
//             </div>
//           </div>
//           <div className="title-price2">
//           <span>25$</span>
//           <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
//           </div>
//         </div>

//       {/* box2 */}
//         <div className="box">
//           <div className="box-img">
//             <img src="img/p2.jpg" alt="#" />
//           </div>
//           <div className="title-price">
//             <h3>Gray Chair</h3>
//             <div className="stars">
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStarHalfStroke} />
//             </div>
//           </div>
//           <div className="title-price2">
//           <span>25$</span>
//           <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
//           </div>
//         </div>
//         {/* box3 */}
//         <div className="box">
//           <div className="box-img">
//             <img src="img/p3.jpg" alt="#" />
//           </div>
//           <div className="title-price">
//             <h3>Gray Chair</h3>
//             <div className="stars">
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStarHalfStroke} />
//             </div>
//           </div>
//           <div className="title-price2">
//           <span>25$</span>
//           <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
//           </div>
//         </div>

//         <div className="box">
//           <div className="box-img">
//             <img src="img/p4.jpg" alt="#" />
//           </div>
//           <div className="title-price">
//             <h3>Gray Chair</h3>
//             <div className="stars">
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStarHalfStroke} />
//             </div>
//           </div>
//           <div className="title-price2">
//           <span>25$</span>
//           <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
//           </div>
//         </div>

//         <div className="box">
//           <div className="box-img">
//             <img src="img/p5.jpg" alt="#" />
//           </div>
//           <div className="title-price">
//             <h3>Gray Chair</h3>
//             <div className="stars">
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStarHalfStroke} />
//             </div>
//           </div>
//           <div className="title-price2">
//           <span>25$</span>
//           <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
//           </div>
//         </div>

//         <div className="box">
//           <div className="box-img">
//             <img src="img/p6.jpg" alt="#" />
//           </div>
//           <div className="title-price">
//             <h3>Gray Chair</h3>
//             <div className="stars">
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStar} />
//             <FontAwesomeIcon icon={faStarHalfStroke} />
//             </div>
//           </div>
//           <div className="title-price2">
//           <span>25$</span>
//           <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
//           </div>
//         </div>
//       </div>     
//   </section>
//   </div>
//   )
// }

// export default Shop


import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Styles/Shop.css';

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Gray Chair", price: 25, image: "img/p1.jpg" },
    { id: 2, name: "Wooden Table", price: 40, image: "img/p2.jpg" },
    { id: 3, name: "Sofa Set", price: 150, image: "img/p3.jpg" },
    { id: 4, name: "Modern Lamp", price: 30, image: "img/p4.jpg" },
    { id: 5, name: "Comfort Bed", price: 200, image: "img/p5.jpg" },
    { id: 6, name: "Office Chair", price: 35, image: "img/p6.jpg" }
  ];

  return (
    <section className="shop" id="shop">
      <div className="heading">
        <span>New Arrival</span>
        <h2>Shop Now</h2>
      </div>
      <div className="shop-container">
        {products.map((product) => (
          <div className="box" key={product.id}>
            <div className="box-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="title-price">
              <h3>{product.name}</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </div>
            </div>
            <div className="title-price2">
              <span>${product.price}</span>
              <FontAwesomeIcon 
                icon={faCartShopping} 
                className="cart-icon" 
                onClick={() => addToCart(product)} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
