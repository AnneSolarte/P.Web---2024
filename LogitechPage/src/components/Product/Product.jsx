export function Product(props) {
    const {text, img} = props
    return (
        <div className="sectionProduct">
            <img src={img} />
            <p>{text} </p>
        </div>
    )
}