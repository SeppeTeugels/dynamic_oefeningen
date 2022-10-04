import {Card, Col} from "react-bootstrap";

export function Numbers(props){
    const {numbers} = props;
    if(!numbers) return;
    return <>
               {numbers.map((n, i) => <Number key={i} number={n}/>)}
        </>
}

export function Number(props){
    const {number} = props;
    if(!number) return;
    return <Col xs={4} sm={3} md={2} xxl={1}
        className={"text-center"}>
        <Card onClick={() => alert(number)} className="m-2 p-2 shadow-sm">{number}</Card>
    </Col>
}