import React, {useState} from 'react'
import './styles.css'

const SingleContact = ({image, name, extra, messages, time}) => {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => setOpen(!open)} className={open === false ? 'contact-container' : 'contact-container2'} >
              <div className='contact-paper'>
                <div className='contact-left'>
                  <img src={image} />
                  <div className='cl-float-white'><div className='cl-float-blue'></div></div>
                </div>
                <div className='contact-right'>
                  <div className='contact-rtop'>
                    <h1>{name}</h1>
                    {extra === 'New' && (
                      <div className='contact-rt-box1'>New</div>
                    )}
                    {extra === 2 && (
                      <div className='contact-rt-box2'><h2>2</h2></div>
                    )}
                  </div>
                  <div className='contact-rbottom'>
                    <div className='contact-rb-left'>{(`${messages.substring(0, 27)}...`)}</div>
                    <div className='contact-rb-right'>{time}</div>
                  </div>
                </div>
              </div>
          </div>
  )
}

export default SingleContact