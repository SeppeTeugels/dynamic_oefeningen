import {MenuProduct} from "./MenuProduct";


export function MenuCard(prop) {
    const {product} = prop;
    if (!product) return;
    return <div style={{marginLeft:"2%"}}><h1>Menu</h1>{product.map( p => <MenuProduct key={p.name} products={p}/>)}</div>
}