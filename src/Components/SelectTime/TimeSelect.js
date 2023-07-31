import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import './styles.css'

const TimeSelect = ({showTime, setShowTime}) => {
  return (
    <div className='dhp-time'> 
        <div className='dhp-t-paper'>
            <p>This week</p>
            <button onClick={() => setShowTime(!showTime)}>
                {showTime ? <IoIosArrowUp className='dhp-t-logo' /> : <IoIosArrowDown className='dhp-t-logo' />}
            </button>
        </div>
        {showTime && (
            <div className='dhp-t-dropdown'>
                <button>Last week</button>
            </div>
        )}
    </div>
  )
}

export default TimeSelect