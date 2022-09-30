import {Numbers} from "../components/Numbers";
import {Section} from "../components/Section";

export function NumbersPage(props){
    const {numbers} = props;
    if (!numbers) return;
    return <>
        <div className={"mx-3"}>
           <Section title={'alle getallen'}>
            <Numbers numbers={numbers} />
        </Section>
        <Section title={'getallen>6'}>
            <Numbers numbers={numbers.filter(n => n > 6 )}/>
        </Section>
            <Section  title={'getallen*2'}>
                <Numbers numbers={numbers.map(n => n * 2 )}/>
            </Section>
        </div>
    </>
}