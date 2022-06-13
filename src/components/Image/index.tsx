import React from 'react'

interface IImageProps {
    image: File;
    hasCancelButton?: boolean;
    onCancel?: () => void;
}

const Image = ({ image, hasCancelButton = true, onCancel }: IImageProps) => {
    return (
        <div className='relative'>
            <img alt="user-uploaded-image" src={URL.createObjectURL(image)} className="md:max-w-[600px] sm:max-w-[350px] max-h-[500px] rounded-[10px] border border-secondary" />

            {hasCancelButton &&
                <img onClick={() => onCancel && onCancel()} alt="cross" src="/assets/cross.svg" className='w-[16px] h-[16px] absolute top-2 right-2 hover:cursor-pointer' />
            }
        </div>
    )
}

export default Image