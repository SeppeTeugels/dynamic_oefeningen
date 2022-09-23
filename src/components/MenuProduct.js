export function MenuProduct(props) {
    const {products} = props;
    return <div style={{flex: 1, display:"inline"}}>{products.name}  <div style={{fontSize: 10, display:"inline" , color: "blue"}}> <ProductSize product={products}/></div> <div style={{display: "inline-flex", alignSelf: "right", marginLeft: "10%"}}>&euro;{products.price}</div>
        <div style={{fontSize: 10, color: "blue"}}><ProductNote product={products}/></div> </div>
}

export function ProductSize(prop) {
    const {product} = prop;
    return <span> {product.size ? `( ${product.size}cl) ` : ""} </span>;
}

export function ProductNote(prop) {
    const {product} = prop;
    return <span> {product.note ? product.note : ""} </span>;
}