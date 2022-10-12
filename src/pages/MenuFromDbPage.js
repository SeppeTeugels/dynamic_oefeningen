import {Section} from "../components/Section";
import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCard} from "../components/MenuCard";


const menuConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options){
        const data = snapshot.data(options);
        console.log(data)
        return {...data, id: snapshot.id}
    }
}

export function MenuFromDbPage(){
    const query = collection(firestoreDB, 'Products').withConverter(menuConverter);
    const [values, loading, error] = useCollectionData(query);
    console.log({values,loading, error});
    return <>
        <Section title={"menu"} initial={1}>
            <MenuCard product={values}/>
        </Section>
    </>
}