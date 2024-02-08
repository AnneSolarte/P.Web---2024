export function Section(props) {
    const {text, press} = props
    return (
        <li  className={press}>{text}</li>
    )
}