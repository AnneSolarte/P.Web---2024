import { Section } from '../TopBarSection/TopBarSection'
import './TopBarSectionsList.css'

export function SectionsList() {
    return (
        <ul className='SectionsList'>
            <Section text='HOME' press='none'></Section>
            <Section text='PRODUCTS' press='none'></Section>
            <Section text='SERVICES' press='none'></Section>
            <Section text='MEMBERS' press='none'></Section>
            <Section text='CONTACTS' press='none'></Section>
        </ul>
    )
}