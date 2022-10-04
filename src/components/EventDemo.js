import {MyButton} from "./MyButton";
import {Button} from "react-bootstrap";

export function EventDemo() {
    return (<>
                <div  style={{justifyContent:"center"}}>
                    <Button style={{width: "100%" }} onClick={() => alert('button is clicked')}>click</Button>
                    <Button style={{width: "100%", marginTop:"10px" }} onClick={(e) => alert('button is clicked') }>click</Button>

                </div>
                <div onClick={()=> alert("div is clicked")} style={{backgroundColor:"#ffc0cb"}}>
                    <p> Dit is een div.</p>
                    <a href={"#"} onClick={(e) => {e.preventDefault(); e.stopPropagation(); alert("link is clicked")}}>dit is een link met een href</a><span> - en -</span><MyButton  style={{ marginLeft:"10px" }} onClick={(e) => {e.stopPropagation(); alert("button is clicked") }} >dit is een button</MyButton>
                </div>
        </>
)
}
