import React, {useState} from 'react'
import {HiOutlineClipboardList} from 'react-icons/hi'
import './styles.css'
import TimeSelect from '../SelectTime/TimeSelect'

const OrderInfo = () => {
    const [showTime, setShowTime] = useState(false)
  return (
    <div className='dh-info-container2'>
        <div className='dh-info-paper'>
          <div className='dhp-info-top'>
            <div className='dhp-s-iconcont2'>
              <HiOutlineClipboardList className='dhp-s-icon' />
            </div>
            <TimeSelect showTime={showTime} setShowTime={setShowTime} />
          </div>
          <div className='dhp-info-bottom2'>
            <div className='dhp-info-bottombox3'>
              <p>All Orders</p>
              <h1>450</h1>
            </div>
            <div className='dhp-info-bottombox3'>
              <p>Pending</p>
              <h1>5</h1>
            </div>
            <div className='dhp-info-bottombox3'>
              <p>Completed</p>
              <h1>445</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OrderInfo