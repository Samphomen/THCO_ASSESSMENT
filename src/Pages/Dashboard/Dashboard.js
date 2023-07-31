import React, { useState } from 'react'
import DNavbar from '../../Components/DNavbar/DNavbar'
import RespBar from '../../Components/Responsive-Sidebar/RespBar'
import Sidebar from '../../Components/Sidebar/Sidebar'

import "./styles.css"
import SalesInfo from '../../Components/Info/SalesInfo'
import OrderList from '../../Components/Orders/OrderList'
import Summary from '../../Components/Summary/Summary'
import Marketting from '../../Components/Marketing/Marketting'
import ProductInfo from '../../Components/Products/ProductInfo'
import CustomerInfo from '../../Components/Info/CustomerInfo'
import OrderInfo from '../../Components/Info/OrderInfo'

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const [showAccount, setShowAccount] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const title = 'Dashboard'
    const params = ''

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
                    <RespBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                </div>
                <div className='dh-hero'>
                    <div className='dhomepage-paper'>
                        <div className='dhomepage-top'>
                            <div className='dh-top-container'>
                                <SalesInfo />
                            </div>
                            <div className='dh-top-container'>
                                <CustomerInfo />
                            </div>
                            <div className='dh-top-container2'>
                                <OrderInfo />
                            </div>
                        </div>
                        <div className='dhomepage-bottom'>
                            <div className='dhb-left'>
                                <div className='dhbl-top'>
                                    <div className='dhbl-top-left'>
                                        <Marketting />
                                    </div>
                                    <div className='dhbl-top-right'>
                                        <ProductInfo />
                                    </div>
                                </div>
                                <div className='dhbl-bottom'>
                                    <Summary />
                                </div>
                            </div>
                            <div className='dhb-right'>
                                <OrderList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard