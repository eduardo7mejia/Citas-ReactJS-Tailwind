import React from 'react'

export const InputFormulario = ({ children, type, placeholder, id}) => {
    return (
        <input id={id} type={type} placeholder={placeholder}  className='border-2 border-color-cuarto hover:border-color-secundario  w-full p-2 mt-2 placeholder-color-tercero rounded-md' />
    )
}
