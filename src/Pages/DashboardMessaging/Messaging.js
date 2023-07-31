import React, { useState } from 'react'
import DNavbar from '../../Components/DNavbar/DNavbar'
import RespBar from '../../Components/Responsive-Sidebar/RespBar'
import Sidebar from '../../Components/Sidebar/Sidebar'

import {FaBars} from 'react-icons/fa'
import {MdOutlineCancel} from 'react-icons/md'
import "./styles.css"
import ContactList from '../../Components/Contacts/ContactList'
import Messages from '../../Components/MessageContent/Messages'

const Messaging = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const [showAccount, setShowAccount] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const [hideContact, setHideContact] = useState(false)
    const title = 'Conversations'
    const params = '/ Conversations'

    return (
        <div className='empty-page'>
            {showSidebar && (
                <div className='left'>
                    <Sidebar />
                </div>
            )}
            <div className={showSidebar ? 'right' : 's-right'}>
                <div className='navbar'>
                    <DNavbar params={params} title={title} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} showSidebar={showSidebar} setShowSidebar={setShowSidebar} showAccount={showAccount} setShowAccount={setShowAccount} />
                </div>
                <div>
                    <RespBar openSidebar={openSidebar} />
                </div>
                <div className='hero'>
                    <div className='chat-container'>
                        <div className='chat-paper'>
                            <div className='chat-header'>
                                <h1 className='ch-title'>Conversations with Customers</h1>
                                <div className='ch-button'>
                                    <button>New Message</button>
                                </div>
                                {/* <div onClick={() => setHideContact(!hideContact)} className='ch-opener'><FaBars className='ch-bars-icon' /></div> */}
                            </div>
                            <div className='chat-body'>
                                <div className={hideContact === false ? 'cb-contact' : 'cb-contact1'}>
                                    <ContactList />
                                </div>
                                <div className='cb-messages'>
                                    <Messages />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messaging