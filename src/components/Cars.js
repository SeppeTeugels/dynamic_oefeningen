export function Cars(props){
    const {cars} = props;
    const {title} = props;
    if(!cars) return;
    return <>
        <h3 style={{textAlign: "center", fontWeight: "bold"}}>
            {title}
        </h3>
        <div style={{display:"flex", height:"100px", width:"100%" , flexWrap:"wrap", alignItems:"center" ,marginBottom:"150px"}}>
            {cars.map(c =>
                <div key={c.id} style={{border:"solid 1px",  backgroundColor:"#ffffff", width:" 100%", margin:"10px", textAlign:"center"}} >
                <h5>{c.name? c.name : ""}</h5>
                <div>{c.brand? `merk: ${c.brand}` : ""}</div>
                <div>{c.type? `type: ${c.type}` : ""}</div>
                <div>{c.color? `kleur: ${c.color}` : ""}</div>
            </div>)}
        </div>
    </>

}