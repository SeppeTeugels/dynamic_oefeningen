import {MenuCard} from "../components/MenuCard";
import {PRODUCTS_DATA} from "../data/data";

export function MenuCardPage(prop) {
    const {product} = prop;
    if (!product) return;
    return  <MenuCard product={PRODUCTS_DATA}/>;
}