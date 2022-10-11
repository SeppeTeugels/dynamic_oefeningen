import {firestoreDB} from "../services/firebase";
import {collection} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'

export function PersonsFromDbPage(){
    const query = collection(firestoreDB, 'Persons');
    const [values, loading, error] = useCollectionData(query);
    console.log({values,loading, error});
    return <>
        <div> persons from db</div>
    </>


}