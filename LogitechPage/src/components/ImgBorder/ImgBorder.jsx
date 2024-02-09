export function ImgBorder(props) {
    const { img, id} = props
    return (
        <div className="imgBordeSection">
            <img src={img} id={id} />
        </div>
        
    )
}