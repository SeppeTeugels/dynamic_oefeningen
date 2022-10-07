import {useState} from "react";
import {MyButton} from "./MyButton";
import {Counter} from "./counter";
import {OnOffDemo} from "./OnOffDemo";

function DemoValue(props){
    const {demoValue, setDemoValue} = props
    return <>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton onClick={()=> setDemoValue(0)}> SET 0</MyButton>
            <MyButton onClick={()=> setDemoValue(77)}> SET 77</MyButton>
            <MyButton onClick={()=> setDemoValue(184)}> SET 184</MyButton>
        </div>
    </>

}

function ReadOnlyDemoValue(props){
    const {demoValue} = props
    return<>
        <div>de waarde van demoValue is {demoValue}</div>
    </>
}

export function StateDemo(){
    const [demoValue, setDemoValue] = useState(0)
    return <>
        <DemoValue demoValue={demoValue} setDemoValue={setDemoValue}/>
        <div style={{marginTop:"20px"}}>
            <Counter name={"counter1"}/>
        </div>
        <div style={{marginTop:"20px"}}>
            <Counter name={"counter2"}/>
        </div>
        <div style={{marginTop:"20px"}}>
            <OnOffDemo/>
        </div>
        <ReadOnlyDemoValue demoValue={demoValue}/>
    </>
}

