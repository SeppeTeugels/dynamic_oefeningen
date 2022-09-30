import {COLOR_DATA} from "../data/data";
import {Section} from "./Section";

export function Cars(props) {
    const {cars, title} = props;
    if (!cars) return;
    return <>
       <Section title={title}>
           {cars.map(c => <Car car={c}/>)}
       </Section>
    </>
}

export function Car(props) {
    const {car} = props
    return <>
        <div key={car.id} style={{
            border: "solid 1px",
            backgroundColor: "#ffffff",
            width: " 100%",
            margin: "10px",
            textAlign: "center"}}>

            <h5>{car.name ? car.name : ""}</h5>
            <div>{car.brand ? `merk: ${car.brand}` : ""}</div>
            <div>{car.type ? `type: ${car.type}` : ""}</div>
            <div>{car.note ? `opmerking: ${car.note}` : ""}</div>
            <div>
                {car.color ? <div style={car?.color && {backgroundColor: Translate(COLOR_DATA, car.color)}}> kleur: {car.color} </div> : ""}
            </div>
        </div>
    </>


}

export function Translate(array, color) {
    return (array.find(el => el.dutch === color).english)
}