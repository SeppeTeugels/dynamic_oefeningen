import {Section} from "../components/Section";
import {Numbers} from "../components/Numbers";
import {useState} from "react";

export function FavoriteNumberPage(props){
    const {numbers} = props;
    const [favoriteNumber, setFavoriteNumber] = useState()
    if (!numbers) return;
    return <>
        <div className={"mx-3"} >
            <Section title={'alle getallen'} initial={1}>
                <Numbers numbers={numbers} favoritenumber={favoriteNumber} setfavoritenumber={setFavoriteNumber} />
                <div>{(favoriteNumber === undefined)?`Mijn favoriete getal is (nog niet gekozen)`:`Mijn favoriete getal is ${favoriteNumber}`}</div>
            </Section>
        </div>
    </>
}