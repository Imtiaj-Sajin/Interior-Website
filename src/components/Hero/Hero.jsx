import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
{/* ------------left-side----------- */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Bringing Interiors<br/> to Your Life
                    </h1>
                </div>

                <div className="flexColStart hero-des">
                    <span>Creating Inspiring Interiors for Your Home or Office</span>
                    <span>Turning Your Dreams into Reality</span>
                </div>
                
                <div className="flexCenter search-bar">
                                <HiLocationMarker color="var(--blue)" size={25}/>
                                <input type="text" name="" id="" />
                                <button className='button'>Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={13619} end={17000} duration={20000}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Happy Customers 
                        </span>

                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={612} end={3000} duration={20000}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Products
                        </span>

                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={11}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Award Winning 
                        </span>

                    </div>
                </div>    
                
            </div>
{/* -----------right side--------- */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
