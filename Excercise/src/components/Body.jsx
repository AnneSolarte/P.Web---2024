
export function Body(props) {
    const {title, bgColor, text} = props
    return (
        <Body style={{ backgroundColor: bgColor}}>
            <h1>{title}</h1>
            <p>{text} </p>
        </Body>
    )
}