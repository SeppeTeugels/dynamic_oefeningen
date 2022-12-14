import {Card, Col} from "react-bootstrap";

export function Cities(props){
    const {cities} = props;
    if (!cities) return;
    return (<>
        {cities.map(c => <City key={c.name} city={c}/>)}
    </>)
}
export function City(props) {
    const {city} = props;
    if(!city) return;
    return <Col xs={4} sm={3} md={2} xxl={2}
                className={"text-center"}>
        <Card onClick={() => alert(city.name)} className="m-2 p-2 shadow-sm">
            <h6>{city.name}</h6>
            <p>{city.population}</p>
        </Card>
    </Col>
}
