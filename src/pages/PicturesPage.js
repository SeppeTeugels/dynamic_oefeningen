/*
Here I use the data-array directly in the component PicturesPage.
What's the difference with PRODUCTS_DATA???
Note: the PICTURES_DATA array is not exported, so it will never be used in
another file.
The fact that this array is not passed as a prop makes it impossible
to reuse this PicturesPage Component for another array of pictures.
In this case I decided that that's just fine...
(it's a thin line...)
 */

const PICTURES_DATA = [
    {
        id: 1,
        credit:
            "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-m4SamoTeuuQ-unsplash.jpg"
    },
    {
        id: 2,
        credit:
            "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-OBYd5yjhGFc-unsplash.jpg"
    },
    {
        id: 3,
        credit:
            "https://unsplash.com/@yan_slg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-OJjVVwZVYuo-unsplash.jpg"
    },
    {
        id: 4,
        credit:
            "https://unsplash.com/@mkaminski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" ,
        author: "Aziz Acharki",
        name: "aziz-acharki-yhRdOEWUKvQ-unsplash.jpg"
    },
];

export function Pictures(prop){
    const {pictures} = prop;
    if (!pictures) return;
    return <div>
        {pictures.map( p => <PictureProduct key={p.id} picture={p}/>)}
    </div>
}

export function PictureProduct(props) {
    const {picture} = props;
    return <div style={{flex: 1, display:"inline"}}>
        <img style={{width:"90%"}} src={`images/${picture.name}`} alt={""}/>
        <div style={{fontSize: 10, marginTop:"5px", marginBottom:"5px" }}>by
            <a href={picture.credit}> {picture.author}</a>
        </div>
        </div>
}

export function PicturesPage(){
    return <div style={{marginLeft:"2%"}}>
        <h1>Pictures</h1>
        <Pictures pictures={PICTURES_DATA}/>
    </div>
}
