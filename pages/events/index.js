import EventList from "../../components/Events/EventList";
import { getAllEvents } from "../../dummy-data";

export default function AllEventsPage() {
    const getEvents = getAllEvents();

    return <div>
        <EventList items={getEvents} />
    </div>
}