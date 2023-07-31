import React, {useState} from 'react'
import { HiOutlineFolderRemove } from 'react-icons/hi'
import {FiShoppingCart} from 'react-icons/fi'
import './styles.css'
import TimeSelect from '../SelectTime/TimeSelect'

const ProductInfo = () => {
  const [showTime, setShowTime] = useState(false)
  return (
    <div className='dpi-container'>
      <div className='dpi-paper'>
        <div className='dpi-innerpaper'>
          <div className='dpi-info-top'>
            <div className='dpi-iconcont'>
              <HiOutlineFolderRemove className='dpi-icon' />
            </div>
          </div>
          <div className='dpi-info-bottom'>
            <div className='dhp-info-bottombox1'>
              <p>All Products</p>
              <h1>45</h1>
            </div>
            <div className='dhp-info-bottombox2'>
              <p>Active</p>
              <div className='dhb-info-ibottombox2'>
                <h1>32</h1>
                <p>+24%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='dpi-paper2'>
        <div className='dpi-innerpaper'>
          <div className='dpi-info-top'>
            <div className='dpi-iconcont2'>
              <FiShoppingCart className='dpi-icon' />
            </div>
            <TimeSelect showTime={showTime} setShowTime={setShowTime} />
          </div>
          <div className='dpi-info-bottom'>
            <div className='dhp-info-bottombox2'>
              <p className='dpi-cart'>Abandoned Cart</p>
              <div className='dhb-info-ibottombox2'>
                <h1>20</h1>
                <p>+0.00%</p>
              </div>
            </div>
            <div className='dhp-info-bottombox1'>
              <p>Customers</p>
              <h1>30</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo