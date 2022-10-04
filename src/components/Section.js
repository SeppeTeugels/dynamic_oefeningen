import {Button, Container, Row} from "react-bootstrap";

export function Section(props) {
    const {title, children} = props;
    return (<>
        <div  style={{backgroundColor: "#e6e6fa", marginBottom:"20px"}}>
            <h3 style={{textAlign: "center", fontWeight: "bold"}}>
                {title}
                <Button variant={"primary"} style={{margin: "5px"}} onClick={() => alert("klik klik klik")}>klik</Button>
            </h3>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>

    </>)
}