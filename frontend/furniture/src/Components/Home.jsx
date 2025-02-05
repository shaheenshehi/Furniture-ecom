import React from 'react'
import './Styles/Home.css'

const Home = () => {
  return (
    <div>
         <section className='home' id='home'>
    <div className="home-text">
      <h1><span>Make </span>Your Comfort <br/>Is Our<span> Happiness</span></h1>
      <p>
      Discover a stunning collection of high-quality furniture designed to transform your home. From elegant sofas to stylish dining sets, we bring you the perfect blend of craftsmanship and modern design. Whether you're looking for timeless classics or trendy statement pieces, our curated selection ensures comfort, durability, and sophistication. Shop now and create a space that reflects your style!</p>
      <a href="/shop" className='btn'> Shop now</a>
    </div>
    </section>

    </div>
  )
}

export default Home