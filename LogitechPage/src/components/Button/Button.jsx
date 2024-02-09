export function Button(props) {
    const {text, press, icon, id} = props
    return (
        <button className={`button ${press}`} id={id} ><img width={10} src={icon} />{text}</button>
    )
}