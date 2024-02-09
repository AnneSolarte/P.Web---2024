import { Section } from '../TopBarSection/TopBarSection'
import './TopBarSectionsList.css'

export function SectionsList() {
    const sectionsData = [
        { text: 'HOME', press: 'none', id: crypto.randomUUID() },
        { text: 'PRODUCTS', press: 'none', id:crypto.randomUUID() },
        { text: 'SERVICES', press: 'none', id:crypto.randomUUID() },
        { text: 'MEMBERS', press: 'none', id:crypto.randomUUID()},
        { text: 'CONTACTS', press: 'none', id:crypto.randomUUID() }
    ];

    return (
        <ul className="SectionsList">
            {sectionsData.map(({id, text, press})=> (
                <Section key={id} text={text} press={press} />
            ))}
        </ul>
    );
}