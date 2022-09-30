import {Section} from "../components/Section";
import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";

export function PersonsPage(props) {
    const {persons} = props;
    if (!persons) return;
    return <>
        <Section title={'alle personen'}>
            <Persons persons={persons}/>
        </Section>
        <Section title={'alle personen volgens leeftijd'}>
            <Persons persons={[...persons].sort((p,a) => a.age - p.age)}/>
        </Section>
        <Section title={'leeftijden'}>
            <Numbers numbers={persons.map(p => p.age)}/>
        </Section>
        <Section title={'unieke leeftijd gesorteerd'}>
        <Numbers numbers={[...new Set(persons.map(p => p.age))]}/>
    </Section>
    </>

}