import React from 'react';
import { Link } from 'gatsby';

const FAQ = () => {
    return (
        <div className="bg-primary text-[#fff] w-[100%] h-screen ">
            <h1 className="text-[#36px] text-secondary text-[48px] text-center">FAQ</h1>

            <ul className="text-[#000] mt-5">
                <li className="ml-4 mb-2 text-xl mb-5">
                    <h3 className="font-bold">Is my uploaded photos saved?</h3>
                    <p>One word <b>NO</b>. Firstly, I respect your privacy. Secondly, I cannot afford the server costs to store them.</p>

                </li>
                <li className="ml-4 mb-2 text-xl mb-5">
                    <h3 className="font-bold">Do you collect any other information about the user?</h3>
                    <p>Read the answer above.</p>

                </li>
            </ul>

        </div>
    )
}

export default FAQ