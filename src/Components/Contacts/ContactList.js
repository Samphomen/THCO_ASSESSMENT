import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {chatSystem} from '../data'
import './styles.css'
import SingleContact from './SingleContact'

const ContactList = () => {
  return (
    <div className='ccon-container'>
        <div className='ccon-header'>
          <div className='ccon-title'>
            <h1>Contacts</h1>
            <p>34</p>
          </div>
          <div className='ccon-search'>
            <div className='ccon-search-paper'>
              <div className='ccon-s-iconcont'><FiSearch className='ccon-s-icon' /></div>
              <input type='text' placeholder='Search' />
            </div>
          </div>
        </div>
        <div className='ccon-body'>
          {chatSystem.map((contact) => (
            <SingleContact key={contact.id} {...contact} />
          ))}
        </div>
    </div>
  )
}

export default ContactList