import React from 'react'

const ContactComponent = () => {
    return (
        <div className='h-screen flex flex-col'>
            <div className='text-[48px] text-secondary text-center'>
                Contact
            </div>

            <div className='items-center'>
                <p className='text-center justify-center items-center '>
                    <a className='font-bold text-[20px] inline-block' href='mailto: justanothermediocre@gmail.com'>EMAIL ME</a>.
                    If you are interested in working with me, or want to learn about the code, maybe talk about life or Manchester United.
                </p>
            </div>
        </div>)
}

export default ContactComponent