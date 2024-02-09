export function Button(props) {
    const {text, press, id} = props
    return (
        <button className={`button ${press}`} id={id} >{text}</button>
    )
}