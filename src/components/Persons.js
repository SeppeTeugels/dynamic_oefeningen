import {Card, Col} from "react-bootstrap";

export function Persons(props) {
    const {persons} = props;
    if (!persons) return;
    console.log(persons)
    return (<>
        {persons.map(p => <Person person={p}/>)}
    </>)
}

//
// Persons.prototype = {
//     persons: PropTypes.arrayOf(Object),
//     title: String
// }

export function Person(props) {
    const {person} = props;
    if (!person) return;
    console.log(person)
    return <Col xs={4} sm={3} md={2} xxl={2}
                className={"text-center"}>
        <Card className="m-2 p-2 shadow-sm">
            <h6>{person.name}</h6>
            <p>{ person.age}</p>
            <p>{person.city}</p>
        </Card>
    </Col>
}