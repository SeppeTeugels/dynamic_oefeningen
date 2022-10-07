import {Button, Container, Row} from "react-bootstrap";
import {useState} from "react";

export function Section(props) {
    const {initial} = (props)
    const [isOpen, setIsOpen] = useState((initial === 1)?true:false)
    const {title, children} = props;
    return (<>
        <div  style={{backgroundColor: "#e6e6fa", marginBottom:"20px"}}>
            <h3 style={{textAlign: "center", fontWeight: "bold"}}>
                {title}
                <Button variant={"primary"} style={{margin: "5px"}} onClick={() => setIsOpen(!isOpen)}>{(isOpen)?"sluit":"open"}</Button>
            </h3>
            <Container>
                <Row>
                    {(isOpen)?children:""}
                </Row>
            </Container>
        </div>

    </>)
}