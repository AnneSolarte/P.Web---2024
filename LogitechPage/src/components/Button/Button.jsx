export function Button(props) {
    const {text, press, icon, id} = props
    return (
        <button className={`button ${press}`} id={id} ><img width={20} src={icon} />{text}</button>
    )
}