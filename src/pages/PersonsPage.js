import {Section} from "../components/Section";
import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";
import {Cities} from "../components/Cities";
import {PersonUtilities} from "../components/person_utilities";


export function PersonsPage(props) {
    const {persons} = props;
    const {cities} = props;
    if (!persons) return;
    return <>
        <Section title={'alle personen'} initial={1}>
            <Persons persons={persons}/>
        </Section>
        <Section title={'alle personen volgens leeftijd'}>
            <Persons persons={[...persons].sort((p,a) => a.age - p.age)}/>
        </Section>
        <Section title={'leeftijden'}>
            <Numbers numbers={persons.map(p => p.age)}/>
        </Section>
        <Section title={'unieke leeftijd gesorteerd'}>
        <Numbers numbers={[...new Set([...persons].sort((p,a) => a.age - p.age).map(p => p.age))]}/>
        </Section>
        <Section title={'city test'}>
            <Cities cities={cities}/>
        </Section>
        <Section title={'steden van alle personen'}>
            <PersonUtilities cities={persons.map(p => p.city)}  cityonce={[...new Set([...persons].map(p => p.city))]} />
        </Section>
    </>

}