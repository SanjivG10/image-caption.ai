
import React from 'react';

const PremiumPlanChooser = () => {

    const PricingTitle = [
        {
            price: "$2",
            availableCaptions: 100,
            stripeLink: "https://buy.stripe.com/test_28o7wz9Nl6Pfbcs000"
        },
        {
            price: "$5",
            availableCaptions: 300,
            stripeLink: "https://buy.stripe.com/test_cN20471gP3D3a8o6op"
        },
        {
            price: "$10",
            availableCaptions: 800,
            stripeLink: "https://buy.stripe.com/test_28obMP2kTc9z1BS7su"
        },
    ]

    return (
        <div className='flex flex-grow flex-col justify-center'>
            <h1 className="text-[3rem] uppercase font-bold mt-2 text-center">Pricing</h1>
            <div className="md:flex md:flex-row justify-center mx-2 sm:flex sm:flex-col ">
                {PricingTitle.map((item) => (<div>
                    <div className='border text-center p-2 m-2'>
                        <h2 className="text-lg font-bold uppercase rounded mb-2">{item.price}</h2>
                        <p className='mb-4'>
                            <div className="font-bold text-[40px]">{item.availableCaptions}</div> premium category captions
                        </p>

                        <a href={item.stripeLink} target="_blank">
                            <button className='bg-secondary text-[#fff] rounded my-1 p-2 hover:translate-y-[-2px]'>
                                Buy Now
                            </button>
                        </a>

                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default PremiumPlanChooser; 