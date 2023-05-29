import React from 'react'
import './Contact.css'
import {MdCall, MdEmail} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className="paddings innerWidth flexCenter c-container">
        {/* -------left------------ */}
        <div className="flexColStart c-left">
          <span className='orangeText'>Get FREE Consultancy</span>
          <span className='primaryText'>Contact Us</span>
          <span className='secondaryText'>For us to offer you the best possible solution, we request you to have the measurements for your room of choice handy, as we will plan based on the measurements provided by you.</span>
        
          <div className="flexColStart contactModes">
            {/* ---first-row---- */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>
              {/* second-mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdEmail size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Email</span>
                    <span className='secondaryText'>xyz@yahoo.com</span>
                  </div>
                </div>
                <div className="flexCenter button">Email now</div>
              </div>
            </div>

            {/* --second-row--- */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
              {/* fourth-mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>
        {/* -----right-side-------- */}
        <div className="c-right">
          <div className="image-container">
            <img src="./x2.jpeg" alt="" />
          </div>
        </div>
      </div>


    </section>
  )
}

export default Contact
