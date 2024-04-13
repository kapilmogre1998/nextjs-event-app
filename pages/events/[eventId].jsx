import { useRouter } from "next/router";
import EventContent from "../../components/EventDetail/EventContent";
import EventLogistics from "../../components/EventDetail/EventLogistics";
import EventSummary from "../../components/EventDetail/EventSummary";
import { getEventById } from "../../dummy-data";


export default function EventDetails() {
    const router = useRouter();
    const eventId = router.query.eventId;

    const event = getEventById(eventId);

    if(!event){
        return <div>No Page Found!!</div>
    }

    return (
        <div>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}  />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </div>
    )
}