import {useState} from "react";
import {MyButton} from "./MyButton";
export function OnOffDemo(){
    const [isOn, setisOn] = useState(false);
    return<>
        <div>huidige waarde is {isOn? "on": "off"}</div>
        <MyButton onClick={() => setisOn(true)}>on</MyButton>
        <MyButton onClick={() => setisOn(false)}>off</MyButton>
    </>
}

