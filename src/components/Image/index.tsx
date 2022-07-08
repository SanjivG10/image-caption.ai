import React from 'react'

interface IImageProps {
    image: string;
    hasCancelButton?: boolean;
}

const Image = ({ image, hasCancelButton = true }: IImageProps) => {
    return (
        <div className='relative'>
            <img alt="user-uploaded-image" src={image} className="md:max-w-[600px] sm:max-w-[350px] max-h-[500px] rounded-[10px] border " />

        </div>
    )
}

export default Image