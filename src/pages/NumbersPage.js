import {Numbers} from "../components/Numbers";

export function NumbersPage(props){
    const {numbers} = props;
    if (!numbers) return;
    return <>
        <div style={{backgroundColor:"#e6e6fa", height:"850px"}}>
            <Numbers numbers={numbers} title={'alle getallen'}/>
            <Numbers numbers={numbers.filter(n => n > 6 )} title={'getallen>6'}/>
            <Numbers numbers={numbers.map(n => n * 2 )} title={'getallen*2'}/>
        </div>
    </>
}