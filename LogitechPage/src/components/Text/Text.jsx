export function Text(props) {
    const {text, size} = props
    return (
        <p className={size} >{text}</p>
    )
}