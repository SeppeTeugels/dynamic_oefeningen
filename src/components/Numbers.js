import {Card, Col} from "react-bootstrap";

export function Numbers(props){
    const {favoritenumber}=props
    const {setfavoritenumber}=props
    const {numbers} = props;
    if(!numbers) return;
    return <>
               {numbers.map((n, i) => <Number key={i} number={n} setfavoritenumber={setfavoritenumber}  favoritenumber={favoritenumber} />)}
        </>
}

export function Number(props){
    const {favoritenumber}=props
    const {setfavoritenumber}=props
    const {number} = props;
    if(!number) return;
    return <Col xs={4} sm={3} md={2} xxl={1}
        className={"text-center"}>
        {(favoritenumber === number)?<Card onClick={() => setfavoritenumber(number)}  style={{backgroundColor:'#ffc107'}} className="m-2 p-2 shadow-sm">{number}</Card> :<Card onClick={() => setfavoritenumber(number)} className="m-2 p-2 shadow-sm">{number}</Card>}

    </Col>
}