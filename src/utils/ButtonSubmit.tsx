import React from 'react'


interface IFormPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element
}
const ButtonSubmit = ({ children, className, ...rest }: IFormPropsButton) => {
    return (
        <div className={className}>
            <button className='p-2 text-white bg-green-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-300 transition-all' {...rest}>
                {children}
            </button>
        </div>
    )
}

export default ButtonSubmit