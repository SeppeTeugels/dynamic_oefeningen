import {Cars} from "../components/Cars";
import {Section} from "../components/Section";


export function CarsPage(props){
    const {cars} = props;
    if (!cars) return;
    return <>
        <Section title={"auto's"} initial={1}>
                <Cars cars={cars} />
        </Section>
    </>
}