import React from 'react'
import './styles.css'
import {OrdersList} from '../data'

const OrderList = () => {
  return (
    <div className='dol-container'>
      <div className='dol-paper'>
        <h1>Recent Orders</h1>
        <div className='dol-list'>
          {OrdersList.map((list) => (
            <div className='dol-block'>
              <div className='dol-single'>
                <div className='dol-item-imgcont'>
                  <img src={list.image} className='dol-item-img'  />
                </div>
                <div className='dol-item-details'>
                  <div className='dol-id-top'>
                    <h3>{list.name}</h3>
                    <p>{list.date}</p>
                  </div>
                  <div className='dol-id-bottom'>
                    <h2>₦{list.price} x {list.quantity}</h2>
                    {list.status === 'pending' && (
                      <div className='dol-status-red'>{list.status}</div>
                    )}
                    {list.status === 'completed' && (
                      <div className='dol-status-green'>{list.status}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className='dol-line'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderList