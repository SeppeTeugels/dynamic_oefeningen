import {Section} from "../components/Section";
import {Persons} from "../components/Persons";
import {useState} from "react";
import {Form} from "react-bootstrap";

export function SearchPersonsPage(props){
    const {persons} = props;
    const [search, setSearch] = useState()
    if (!persons) return;
    return <>
        <div className={"mx-3"} >
            <Section title={'search person'} initial={1}>
                <Form>
                    <Form.Label htmlFor="search">test input:</Form.Label>
                    <Form.Control id="search"
                                  value={search}
                                  onChange={e => setSearch(e.target.value)}/>
                </Form>
                <Persons persons={persons.filter(p => p.name.includes(search) || p.city.includes(search))}/>
            </Section>
        </div>
    </>
}