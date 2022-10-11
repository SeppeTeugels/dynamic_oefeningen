import {firestoreDB} from "../services/firebase";
import {collection} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {Persons} from "../components/Persons";
import {Section} from "../components/Section";

export function PersonsFromDbPage(){
    const query = collection(firestoreDB, 'Persons');
    const [values, loading, error] = useCollectionData(query);
    console.log({values,loading, error});
    return <>
        <div className={"mx-3"}>
            <div className={"m-3"}>
                <Section title={"Personen uit database"} initial={1}>
                    <Persons persons={values}/>
                </Section>
            </div>
        </div>
    </>
}