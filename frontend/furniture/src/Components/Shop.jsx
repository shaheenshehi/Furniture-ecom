import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faStarHalfStroke,faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  return (
    <div>
        <section className="shop" id='shop'>
    <div className="heading">
      <span>New Arrival</span>
      <h2>Shop Now</h2>
      </div>
      <div className="shop-container">
        {/* box1 */}
        <div className="box">
          <div className="box-img">
            <img src="img/p1.jpg" alt="#" />
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

      {/* box2 */}
        <div className="box">
          <div className="box-img">
            <img src="img/p2.jpg" alt="#" />
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
        {/* box3 */}
        <div className="box">
          <div className="box-img">
            <img src="img/p3.jpg" alt="#" />
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

        <div className="box">
          <div className="box-img">
            <img src="img/p4.jpg" alt="#" />
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

        <div className="box">
          <div className="box-img">
            <img src="img/p5.jpg" alt="#" />
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

        <div className="box">
          <div className="box-img">
            <img src="img/p6.jpg" alt="#" />
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
  </section>
  </div>
  )
}

export default Shop