export function Button(props) {
    const {text, press} = props
    return (
        <button id='button' className={press} >{text}</button>
    )
}