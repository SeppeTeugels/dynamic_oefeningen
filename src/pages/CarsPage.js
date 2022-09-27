import {Cars} from "../components/Cars";


export function CarsPage(props){
    const {cars} = props;
    if (!cars) return;
    return <>
        <div style={{backgroundColor:"#e6e6fa", height:"850px"}}>
            <Cars cars={cars} title={"auto's"}/>
        </div>
    </>
}