import React from 'react'
import "./styles.css"
import { RxDashboard } from 'react-icons/rx'
import { AiOutlineSetting, AiOutlineGift } from 'react-icons/ai'
import { HiOutlineClipboardList, HiUsers, HiOutlineFolderRemove, HiOutlineChat} from 'react-icons/hi'
import { FiHeadphones } from 'react-icons/fi'
import { TbLogout } from 'react-icons/tb'
import { useNavigate } from "react-router-dom"

const RespBar = ({ openSidebar, setOpenSidebar }) => {
    const navigate = useNavigate()
    const closeWhenNavigate = () => {
        navigate("/messages/")
        setOpenSidebar(false)
    }


    return (
        <div className={`${openSidebar ? 'rsidebar show' : 'rsidebar'}`}>
            <div className='rs-paper'>
                <div className='rs-content'>
                    <button className='rs-list'>
                        <div className='s-innerbutton'>
                            <RxDashboard className='s-logo' />
                            <h2>Dashboard</h2>
                        </div>
                    </button>
                    <button className='rs-list' >
                        <div className='s-innerbutton'>
                            <HiOutlineClipboardList className='s-logo' />
                            <h2>Orders</h2>
                            <div className='s-ib-amount'><h2>3</h2></div>
                        </div>
                    </button>
                    <button className='rs-list'>
                            <div className='s-innerbutton'>
                                <HiUsers className='s-logo' />
                                <h2>Customers</h2>
                            </div>
                    </button>
                    <button className='rs-list'>
                            <div className='s-innerbutton'>
                                <HiOutlineFolderRemove className='s-logo' />
                                <h2>Inventory</h2>
                            </div>
                    </button>
                    <button className='rs-list' onClick={() => closeWhenNavigate()}>
                            <div className='s-innerbutton'>
                                <HiOutlineChat className='s-logo' />
                                <h2>Conversations</h2>
                                <div className='s-ib-amount'><h2>16</h2></div>
                            </div>
                    </button>
                    <button className='rs-list'>
                            <div className='s-innerbutton'>
                                <AiOutlineSetting className='s-logo' />
                                <h2>Settings</h2>
                            </div>
                    </button>
                    <button className='rs-list'>
                        <div className='s-f-inner-b1'>
                            <FiHeadphones className='s-f-logo' />
                            <p>Contact Support</p>
                        </div>
                    </button>
                    <button className='rs-list'>
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

export default RespBar
