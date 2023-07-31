import React from 'react'
import {BiPlus} from 'react-icons/bi'
import {BsFillSendFill,BsEmojiSmile} from 'react-icons/bs'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {MdDone} from 'react-icons/md'
import './styles.css'
import Phone2 from '../../Images/Phone2.png'
import Contact1 from '../../Images/Contact1.png'

const Messages = () => {
  return (
    <div className='cm-container'>
      <div className='cm-header'>
        <div className='cm-header-paper'>
          <div className='cm-h-left'>
            <img src={Contact1} />
          </div>
          <div className='cm-h-right'>
            <div className='cm-hrt'>
              <div className='cm-hrt-left'>
                <h2>Jane Doe</h2>
              </div>
              <div className='cm-hrt-right'>
                <div className='cm-customer-status'>New customer</div>
                <button>View Profile</button>
              </div>
            </div>
            <div className='cm-hrb'>
              <div className='cm-hrb-left'>
                <div className='cm-presence'><div className='circle'></div>Online</div>
                <h3>12:55am</h3>
              </div>
              <div className='cm-hrb-right'>
                <HiOutlineClipboardList className='cm-order-logo' /> 0 Orders
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cm-body'>
        <div className='cm-body-paper'>
          <div className='cm-b-date-container'>
            <div className='cm-b-date-paper'>
              <h2>12 August 2022</h2>
            </div>
          </div>
          <div className='cm-b-productbox'>
            <div className='cmbp-left'>
              <img src={Phone2} />
            </div>
            <div className='cmbp-right'>
              <div className='cmbp-rt'>iPhone 13</div>
              <div className='cmbp-rb'>
                <h2>₦730,000.00</h2>
                <p>12 in Stock</p>
              </div>
            </div>
          </div>
          <div className='cm-b-user-message'>
            <div className='cmb-umessage-container'>
              <div className='cmb-umessage-paper'>
                <p>Hello, I want to make enquiries about your product</p>
              </div>
            </div>
            <h3>12:55 am</h3>
          </div>
          <div className='cm-b-admin-message'>
            <div className='cmb-amessage-container'>
              <div className='cmb-amessage-paper'>
                <p>Hello Janet, thank you for reaching out</p>
              </div>
            </div>
            <div className='cmb-amessage-footer'>
              <h3>12:55 am</h3>
              <div className='cmb-amessage-sent'><MdDone className='cmb-amessage-sent-icon' /></div>
            </div>
          </div>
          <div className='cm-b-admin-message'>
            <div className='cmb-amessage-container'>
              <div className='cmb-amessage-paper'>
                <p>Hello Janet, thank you for reaching out</p>
              </div>
            </div>
            <div className='cmb-amessage-footer'>
              <h3>12:55 am</h3>
              <div className='cmb-amessage-sent'><MdDone className='cmb-amessage-sent-icon' /></div>
            </div>
          </div>

          {/* NEW DATE */}
          <div className='cm-b-date-container'>
            <div className='cm-b-date-paper'>
              <h2>Today</h2>
            </div>
          </div>
          <div className='cm-b-user-message'>
            <div className='cmb-umessage-container'>
              <div className='cmb-umessage-paper'>
                <p>I want to know if the price is negotiable, i need about 2 Units</p>
              </div>
            </div>
              <h3>12:55 am</h3>
          </div>
          <div className='textbox'>
            <div className='textbox-paper'>
              <div className='textbox-upload'>
                <button><BiPlus className='upload-icon' /></button>
              </div>
              <div className='textbox-text'>
                <div className='textbox-textinput'>
                  <input type='text' placeholder='Your message' />
                </div>
                <div className='textbox-emoji-button'>
                  <button><BsEmojiSmile className='emoji-icon' /></button>
                </div>
              </div>
              <div className='textbox-send'>
                <button>Send <BsFillSendFill className='send-icon' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages