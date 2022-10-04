import {EventDemo} from "../components/EventDemo";

export function EventsAndStatePage() {
    return(
        <>
            <div style={{ backgroundColor:"lavender"}} className={"mx-3"}>
                <h1 style={{textAlign:"center"}}>Events</h1>
                <EventDemo/>
            </div>
        </>
    )
}