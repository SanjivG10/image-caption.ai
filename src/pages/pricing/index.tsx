import Header from '@components/Header'
import Navbar from '@components/Navbar'
import PremiumPlanChooser from '@components/PremiumPlanChooser'
import React from 'react'

const Pricing = () => {



    return (
        <div className='flex flex-col h-screen'>
            <Header title='Pricing' />
            <Navbar />

            <PremiumPlanChooser />
        </div>
    )
}

export default Pricing