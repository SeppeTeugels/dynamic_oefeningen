import {COLOR_DATA} from "../data/data";
import {array} from "prop-types";

export function Cars(props) {
    const {cars} = props;
    const {title} = props;
    if (!cars) return;
    return <>
        <h3 style={{textAlign: "center", fontWeight: "bold"}}>
            {title}
        </h3>
        <div style={{
            display: "flex",
            height: "100px",
            width: "100%",
            flexWrap: "wrap",
            alignItems: "center",
            marginBottom: "150px"
        }}>
            {cars.map(c => <Car key={c.id} car={c}/>)}
        </div>
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