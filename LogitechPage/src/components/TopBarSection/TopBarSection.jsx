export function Section(props) {
    const {text, press} = props
    return (
        <p className={press}>{text}</p>
    )
}