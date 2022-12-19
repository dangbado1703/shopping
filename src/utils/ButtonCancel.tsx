import React from 'react'


interface IFormPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element
}
const ButtonCancel = ({ children, ...rest }: IFormPropsButton) => {
    return (
        <div>
            <button className='p-2 text-white bg-red-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-300 transition-all' {...rest}>
                {children}
            </button>
        </div>
    )
}

export default ButtonCancel