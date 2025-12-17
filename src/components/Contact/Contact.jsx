import React from 'react'
import './Contact.css'
import { MdCall, MdEmail } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const PHONE = '+34925178639'
const EMAIL = 'info@buenavistainteriors.es'
const WHATSAPP_LINK = 'https://wa.me/34925178639'
const MESSENGER_LINK = 'https://m.me/buenavistainteriors'

const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className="paddings innerWidth flexCenter c-container">

        {/* -------left------------ */}
        <div className="flexColStart c-left">
          <span className='orangeText'>Get FREE Consultancy</span>
          <span className='primaryText'>Contact Us</span>
          <span className='secondaryText'>
            For us to offer you the best possible solution, we request you to have the measurements for your room of choice handy, as we will plan based on the measurements provided by you.
          </span>

          <div className="flexColStart contactModes">

            {/* ---first-row---- */}
            <div className="flexStart row">

              {/* Call */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>+34 925 178 639</span>
                  </div>
                </div>
                <a href={`tel:${PHONE}`} className="flexCenter button">
                  Call now
                </a>
              </div>

              {/* Email */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdEmail size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Email</span>
                    <span className='secondaryText'>{EMAIL}</span>
                  </div>
                </div>
                <a href={`mailto:${EMAIL}`} className="flexCenter button">
                  Email now
                </a>
              </div>

            </div>

            {/* --second-row--- */}
            <div className="flexStart row">

              {/* WhatsApp */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>WhatsApp</span>
                  </div>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flexCenter button"
                >
                  Chat now
                </a>
              </div>

              {/* Messenger */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>Messenger</span>
                  </div>
                </div>
                <a
                  href={MESSENGER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flexCenter button"
                >
                  Message now
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* -----right-side-------- */}
        <div className="c-right">
          <div className="image-container">
            <img src="./x2.jpeg" alt="Interior Design" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
