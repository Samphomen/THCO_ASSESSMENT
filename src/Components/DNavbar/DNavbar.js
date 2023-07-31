import React from 'react'
import "./styles.css"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import {HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { AiOutlineClose} from 'react-icons/ai'
import Profile1 from '../../Images/Profile1.png'
import Notification from '../../Images/Notification.png'
import Home from '../../Images/Home.png'
import { FaBars } from 'react-icons/fa'

const DNavbar = ({ showSidebar, setShowSidebar, showAccount, setShowAccount, openSidebar, setOpenSidebar, title, params }) => {
    return (
        <div className='navbar'>
            <div className='nav-top'>
                <div className='n-paper'>
                    <div className='nav-l'>
                        <div className='n-left'>
                            <button className='s-rbutton' onClick={() => setShowSidebar(!showSidebar)}>
                                {showSidebar ? <HiOutlineArrowLeft className='s-arrow' /> : <HiOutlineArrowRight className='s-arrow' />}
                            </button>
                        </div>
                        <div className='nav-top-left'>
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className='nav-top-right'>
                        <div className='n-tr-acct'>
                            <div className='acct-paper'>
                                <h2>Nancy's Shop</h2>
                                <button onClick={() => setShowAccount(!showAccount)} className="n-switch-logo">
                                    {showAccount ? <IoIosArrowUp className='n-logo' /> : <IoIosArrowDown className='n-logo' />}
                                </button>
                            </div>
                            {showAccount && (
                                <div className='dashboard-dropdown'>
                                    <button>My Account</button>
                                    <button>Logout</button>
                                </div>
                            )}
                        </div>
                        <div className='n-tr-notif'>
                            <div className='n-tr-notif-logocont'>
                                <img src={Notification} className='notif-logo' />
                            </div>
                        </div>
                        <div className='n-tr-profile'>
                            <img src={Profile1} className='n-tr-image' />
                        </div>
                        <div className='toggle-btn'>
                            <button onClick={() => setOpenSidebar(!openSidebar)} className='nov'>
                                {openSidebar ? <AiOutlineClose /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-line'></div>
            <div className='nav-bottom'>
                <div className='nav-bottom-paper'>
                    <img src={Home} className='nav-bottom-image' />
                    <div className='nav-params'>{params}</div>
                </div>
            </div>
        </div>
    )
}

export default DNavbar