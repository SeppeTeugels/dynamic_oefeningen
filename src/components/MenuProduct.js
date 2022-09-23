export function MenuProduct(props) {
    const {products} = props;
    return <div style={{margin: "2vw", fontSize: "Larger",display:"flex",justifyContent:"space-between",maxWidth:"50%"}}>
        <div>
            {products.name || "unknown"} <ProductSize product={products}/>
            <ProductNote product={products} />
        </div>
        <div>
            {`€${products.price}`}
        </div>

    </div>}

export function ProductSize(prop) {
    const {product} = prop;
    return <span style={{color:"blue"}}> {product.size ? `(${product.size}cl) ` : ""} </span>;
}

export function ProductNote(prop) {
    const {product} = prop;
    return <div style={{fontSize:"x-small", color:"blue"}}> {product.note ? product.note : ""} </div>;
}