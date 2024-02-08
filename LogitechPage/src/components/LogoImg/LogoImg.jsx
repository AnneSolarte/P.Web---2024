import logo from '../../resources/logo.png'
export function LogoImg(props) {
    const {width} = props
    return (
        <img src={logo} width={width} className='logoImg'/>
    )
}