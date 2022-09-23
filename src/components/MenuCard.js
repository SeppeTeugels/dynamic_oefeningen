import {MenuProduct} from "./MenuProduct";


export function MenuCard(prop) {
    const {product} = prop;
    if (!product) return;
  return <div>{product.map( p => <MenuProduct key={p.name} products={p}/>)}</div>
}