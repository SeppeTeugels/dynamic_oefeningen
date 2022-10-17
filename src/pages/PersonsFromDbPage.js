import {firestoreDB} from "../services/firebase";
import {collection, query, orderBy, addDoc, updateDoc, doc} from 'firebase/firestore'
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
        return {...data, id: snapshot.id, ref:snapshot.ref}
    }
};




export function PersonsFromDbPage() {
    const [searchInput, setSearchInput] = useState()
    const collectionRef = collection(firestoreDB, 'Persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("name"))
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({values, loading, error});


    async function addDummyPerson() {
        const person = {name: "Dummy", age: 19, city: "Mechelen"};
        await addDoc(collectionRef, person);
        console.log("add dummy person done")
    }

    function incrementAllAges() {
        const arrayOfPromises = values.forEach(person => updateDoc(person.ref, {age: Number(person.age)+1}))
        Promise.all((arrayOfPromises));
        console.log('increment ages with 1 for all persons done')
    }
    function decreaseAllAges() {
        values.forEach(person => updateDoc(person.ref, {age: Number(person.age)-1}))
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
                        <Button onClick={incrementAllAges} variant={"primary"} style={{margin: "5px", width: "20%", height: "35px"}}>age+1</Button>
                        <Button onClick={decreaseAllAges} variant={"primary"} style={{margin: "5px", width: "20%", height: "35px"}}>age-1</Button>

                    </div>
                    <Persons persons={(searchInput)? values.filter(p=> p.name.includes(searchInput) || p.city.includes(searchInput)) : values}/>
                </Section>
            </div>
        </div>
    </>
}

