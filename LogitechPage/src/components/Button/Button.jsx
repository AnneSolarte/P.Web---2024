export function Button(props) {
    const {text, press} = props
    return (
        <button className={press}>{text}</button>
    )
}