import {Section} from "../components/Section";
import {collection, orderBy, query, where} from "firebase/firestore";
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
    const collectionRef = collection(firestoreDB, "Products").withConverter(menuConverter);
    const queryRef = query(collectionRef, where("price", "==", 1), where("name", ">", "a"), orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({values,loading, error});
    console.log(error);
    return <>
        <Section title={"menu"} initial={1}>
            <MenuCard product={values}/>
        </Section>
    </>
}