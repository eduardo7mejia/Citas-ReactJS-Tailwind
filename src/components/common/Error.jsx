const Error = ({children}) => {
    return (
        <div className='bg-red text-color-white text-center p-3 mb-3 uppercase font-bold rounded-md'>
            {children}
        </div>
    )
}

export default Error