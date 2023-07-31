import React, {useState} from 'react'
import {FiUsers} from 'react-icons/fi'
import './styles.css'
import TimeSelect from '../SelectTime/TimeSelect'


const CustomerInfo = () => {
    const [showTime, setShowTime] = useState(false)
  return (
    <div className='dh-info-container'>
        <div className='dh-info-paper'>
            <div className='dhp-info-top'>
              <div className='dhp-s-iconcont2'>
                <FiUsers className='dhp-s-icon' />
              </div>
              <TimeSelect showTime={showTime} setShowTime={setShowTime} />
            </div>
            <div className='dhp-info-bottom'>
              <div className='dhp-info-bottombox2'>
                <p>Customers</p>
                <div className='dhb-info-ibottombox2'>
                  <h1>1250</h1>
                  <p>+15.80%</p>
                </div>
              </div>
              <div className='dhp-info-bottombox2'>
                <p>Active</p>
                <div className='dhb-info-ibottombox2'>
                  <h1>450</h1>
                  <p>+85%</p>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default CustomerInfo