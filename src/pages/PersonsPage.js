import {Section} from "../components/Section";
import {Persons} from "../components/Persons";

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
    </>

}