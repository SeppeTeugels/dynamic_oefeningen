import {EventDemo} from "../components/EventDemo";
import {StateDemo} from "../components/StateDemo";
import {Section} from "../components/Section";

export function EventsAndStatePage() {
    return(
        <>
            <div style={{ backgroundColor:"lavender"}} className={"mx-3"}>
                <Section title="Events">
                    <EventDemo/>
                </Section>
                <Section title="state">
                    <StateDemo/>
                </Section>
            </div>
        </>
    )
}