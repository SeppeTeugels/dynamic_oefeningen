import {useState} from "react";
import {MyButton} from "./MyButton";

export function Counter(props) {
    const{name} = props;
    const [demoValue, setDemoValue] = useState(0)
    return <>
        <div>de waarde van {name} is {demoValue}</div>
        <MyButton onClick={()=> setDemoValue(0)}>clear</MyButton>

        <MyButton onClick={()=> setDemoValue(demoValue-1)}>-</MyButton>

        <MyButton onClick={()=> setDemoValue(demoValue+1)}>+</MyButton>
    </>

}