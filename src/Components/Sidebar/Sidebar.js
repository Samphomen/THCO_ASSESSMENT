import React, { useState } from 'react'
import "./styles.css"
import { AiOutlineSetting, AiOutlineGift } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { HiOutlineClipboardList, HiUsers, HiOutlineFolderRemove, HiOutlineChat} from 'react-icons/hi'
import { MdArrowForwardIos } from 'react-icons/md'
import { FiHeadphones } from 'react-icons/fi'
import { TbLogout } from 'react-icons/tb'
import { useNavigate } from "react-router-dom"
import Logo from "../../Images/Logo.png"


const Sidebar = () => {
    const [expand, setExpand] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='sidebar'>
            <div className='sidebar-paper'>
                <div className='s-top'>
                    <div className='s-header'>
                        <div className='s-logocont'>
                            <img src={Logo} alt="logo" className='sidebar-logo' />
                        </div>
                        <h2>Metrix</h2>
                    </div>
                    <div className='s-content'>
                        <button className='s-list'>
                            <div className='s-innerbutton'>
                                <RxDashboard className='s-logo' />
                                <h2>Dashboard</h2>
                            </div>
                        </button>
                        <button className='s-list'>
                            <div className='s-innerbutton'>
                                <HiOutlineClipboardList className='s-logo' />
                                <h2>Orders</h2>
                                <div className='s-ib-amount'><h2>3</h2></div>
                            </div>
                        </button>
                        <button className='s-list'>
                            <div className='s-innerbutton'>
                                <HiUsers className='s-logo' />
                                <h2>Customers</h2>
                            </div>
                        </button>
                        <button className='s-list'>
                            <div className='s-innerbutton'>
                                <HiOutlineFolderRemove className='s-logo' />
                                <h2>Inventory</h2>
                            </div>
                        </button>
                        <button className='s-list' onClick={() => navigate("/messages/")}>
                            <div className='s-innerbutton'>
                                <HiOutlineChat className='s-logo' />
                                <h2>Conversations</h2>
                                <div className='s-ib-amount'><h2>16</h2></div>
                            </div>
                        </button>
                        <button className='s-list'>
                            <div className='s-innerbutton'>
                                <AiOutlineSetting className='s-logo' />
                                <h2>Settings</h2>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='s-footer'>
                    <button className='s-f-b1'>
                        <div className='s-f-inner-b1'>
                            <FiHeadphones className='s-f-logo' />
                            <p>Contact Support</p>
                        </div>
                    </button>
                    <button className='s-f-b2'>
                        <div className='s-f-inner-b2'>
                            <div className='s-f-b2-top'>
                                <AiOutlineGift className='s-f-logo' />
                                <p>Free Gift Awaits You!</p>
                            </div>
                            <div className='s-f-b2-bottom'>
                                <p>Upgrade your account</p>
                                <MdArrowForwardIos className='s-f-logo2' />
                            </div>
                        </div>   
                    </button>
                    <button className='s-f-b3'>
                        <div className='s-f-inner-b3'>
                            <TbLogout className='s-f-logo3' />
                            <p>Logout</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar