import logo from '../../resources/logo.png'
export function LogoImg(props) {
    const {width, id} = props
    return (
        <img src={logo} width={width} id={id}/>
    )
}