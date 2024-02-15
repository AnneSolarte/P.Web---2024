import {Product} from '../Product/Product'
import gaming from '../../resources/gaming.png'
import graficDesign from '../../resources/graficDesign.png'
import office from '../../resources/office.png'
import { Text } from '../Text/Text'

export default function SectionProducts() {
    const productsData = [
        { text: 'Gaming', src: gaming, id: crypto.randomUUID() },
        { text: 'Grafic Design', src: graficDesign, id:crypto.randomUUID() },
        { text: 'Office & Otters', src: office, id:crypto.randomUUID() },
    ];


    return (
        <>
            <Text text='Products' clas='title' />
        <section className='sectionProducts'>
                {productsData.map(({id, text, src})=> (
                    <Product key={id} text={text} img={src}/>
                ))}
        </section>
        </>
        
        
    );
}
