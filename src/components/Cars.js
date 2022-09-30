import {COLOR_DATA} from "../data/data";

export function Cars(props) {
    const {cars} = props;
    if (!cars) return;
    return <>
            {cars.map(c => <Car car={c}/>)}
    </>
}

export function Car(props) {
    const {car} = props
    return <>
        <div key={car.id} style={{
            backgroundColor: "#ffffff",
            width: " 30%",
            margin: "10px",
            textAlign: "center",
            border: "solid 1px",

        }}>

            <h5>{car.name ? car.name : ""}</h5>
            <div>{car.brand ? `merk: ${car.brand}` : ""}</div>
            <div>{car.type ? `type: ${car.type}` : ""}</div>
            <div>{car.note ? `opmerking: ${car.note}` : ""}</div>
            <div>
                {car.color ? <div
                    style={car?.color && {backgroundColor: Translate(COLOR_DATA, car.color), Color:`${textColor(COLOR_DATA, car.color)}`}}> kleur: {car.color} </div> : ""}
            </div>
        </div>
    </>


}
export function textColor(array, color){
    return (array.find(el => el.dutch === color).textColor)
}


export function Translate(array, color) {
    return (array.find(el => el.dutch === color).english)
}