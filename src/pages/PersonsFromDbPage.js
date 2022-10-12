import {firestoreDB} from "../services/firebase";
import {collection, query, orderBy, addDoc} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {Persons} from "../components/Persons";
import {Section} from "../components/Section";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";

const personConverter = {
    toFirestore: function (dataInApp) {
        return{
            name: dataInApp.name,
            age: Number(dataInApp.age),
            city: dataInApp.city,
        }

    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};




export function PersonsFromDbPage() {
    const [searchInput, setSearchInput] = useState()
    const collectionRef = collection(firestoreDB, 'Persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("name"))
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({values, loading, error});


    function addDummyPerson(){
        const person = {name:"Dummy", age:19, city:"Mechelen"};
        addDoc(collectionRef, person);
    }

    return <>
        <div className={"mx-3"}>
            <div className={"m-3"}>
                <Section title={"Personen uit database"} initial={1}>
                    <Form>
                        <Form.Label htmlFor="search">test input:</Form.Label>
                        <Form.Control id="search"
                                      value={searchInput}
                                      onChange={e => setSearchInput(e.target.value)}/>
                    </Form>
                    <div>
                        <Button onClick={addDummyPerson} variant={"primary"} style={{margin: "5px", width: "20%", height: "35px"}}>+dummy</Button>
                    </div>
                    <Persons persons={(searchInput) ? values.filter(p => p.name.includes(searchInput) || p.city.includes(searchInput)) : values}/>
                </Section>
            </div>
        </div>
    </>
}

