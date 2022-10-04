import {Button} from "react-bootstrap";

export function EventDemo() {
    return (
       <div style={{justifyContent:"center", textAlign:"center"}}>
           <button style={{width: "100%" }} onClick={() => alert('button is clicked')}>click</button>
           <Button variant="outline-primary" style={{width: "100%", marginTop:"10px" }} onClick={() => alert('bootstrap button is clicked')}>click</Button>
       </div>
)
}