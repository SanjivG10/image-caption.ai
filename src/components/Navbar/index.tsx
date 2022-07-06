import React from 'react'
import { Link } from 'gatsby';
import GoogleLogin from '@components/GoogleLogin';

const Navbar = () => {



    return (
        <nav className="py-4 rounded shadow flex justify-around ">
            <div className="container flex flex-wrap justify-between items-center mx-4 ">
                <Link to="/" className="flex items-center">
                    <img alt="logo" src='/assets/logo_64.png' width={40} className="mr-2" />
                    <span className="text-xl  whitespace-nowrap">captionimage<span className='font-bold text-secondary'>.</span>ai</span>
                </Link>
            </div>
            <div className='mx-auto flex col items-center'>

                <Link to='/pricing' className='mx-2  text-[20px] p-1'>
                    pricing
                </Link>

                <GoogleLogin />
            </div>
        </nav>

    )
}

export default Navbar