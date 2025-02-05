import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faStarHalfStroke,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Styles/NewCollection.css'


export const NewCollection = () => {
  return (
    <div> <section className='new' id='new'>
    <div className="heading">
    <span>New Collection</span>
<h2>Best Selling</h2>
</div>
<div className="new-container">
{/* new box 1 */}
<div className="box">
      <div className="box-img">
        <img src="img/new1.jpg" alt="#" />
      </div>
      <div className="title-price">
        <h3>Gray Chair</h3>
        <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfStroke} />
        </div>
      </div>
      <div className="title-price2">
      <span>25$</span>
      <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
      </div>
    </div>
    {/* new box 2 */}
    <div className="box">
      <div className="box-img">
        <img src="img/new2.jpg" alt="#" />
      </div>
      <div className="title-price">
        <h3>Gray Chair</h3>
        <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfStroke} />
        </div>
      </div>
      <div className="title-price2">
      <span>25$</span>
      <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
      </div>
    </div>
{/* box 3 */}
    <div className="box">
      <div className="box-img">
        <img src="img/new3.jpg" alt="#" />
      </div>
      <div className="title-price">
        <h3>Gray Chair</h3>
        <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfStroke} />
        </div>
      </div>
      <div className="title-price2">
      <span>25$</span>
      <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
      </div>
    </div>
</div>
</section></div>
  )
}
