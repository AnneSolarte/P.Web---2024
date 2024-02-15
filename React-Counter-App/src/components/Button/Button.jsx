export function Button({type, text, handleClickCounter}) {
    const handleClick = () => {
        console.log('Entro a handleClick en button')
        handleClickCounter(type)
    }
    return (
        <button onClick={handleClick} type={type} id={`button${type}`} className='button'>{text}</button>
    )
}