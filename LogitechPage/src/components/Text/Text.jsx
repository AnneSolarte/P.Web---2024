export function Text(props) {
    const {clas, text} = props
    return (
        <p className={clas}>{text}</p>
    )
}