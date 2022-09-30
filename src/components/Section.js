export function Section(props){
    const {title, children} = props;
    return(<>

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
        {children}
    </div>
    </>    )
}