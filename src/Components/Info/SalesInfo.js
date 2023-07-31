import React, {useState} from 'react'
import Graph from '../../Images/Graph.png'
import './styles.css'



import TimeSelect from '../SelectTime/TimeSelect'

const SalesInfo = () => {
  const [showTime, setShowTime] = useState(false)
  return (
      <div className='dh-info-container'>
        <div className='dh-info-paper'>
          <div className='dhp-info-top'>
            <div className='dhp-s-iconcont'>
              <img src={Graph} className='dhp-s-icon' />
            </div>
            <TimeSelect showTime={showTime} setShowTime={setShowTime} />
          </div>
          <div className='dhp-info-bottom'>
            <div className='dhp-info-bottombox1'>
              <p>Sales</p>
              <h1>₦4,500,000</h1>
            </div>
            <div className='dhp-info-bottombox2'>
              <p>Volume</p>
              <div className='dhb-info-ibottombox2'>
                <h1>450</h1>
                <p>+20.00%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SalesInfo