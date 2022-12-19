import React from 'react'

const FieldError = ({ children, hasError, message }: { children: JSX.Element, hasError: boolean | undefined, message: string | undefined }) => {
    return (
        <>
            <div>
                {children}
                {hasError ?
                    <span className='text-red-400 text-[12px] transition-all'>{message}</span>
                    : ''}
            </div>
        </>
    )
}

export default FieldError