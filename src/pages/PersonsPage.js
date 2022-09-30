import {Section} from "../components/Section";
import {Persons} from "../components/Persons";

export function PersonsPage(props) {
    const {persons} = props;
    if (!persons) return;
    return <>
        <Section title={'alle personen'}>
            <Persons persons={persons}/>
        </Section>
    </>

}