import { useRouter } from "next/router";
import EventList from "../components/Events/EventList";
import EventSearch from "../components/Events/EventSearch";
import { getAllEvents, getFilteredEvents } from "../dummy-data"

const HomePage = () => {
  const router = useRouter();
  const getEvents = getAllEvents();

  const filerEvents = (year, month) => {
    const events = getFilteredEvents(year, month);

    router.push(`/events/${year}/${month}`)
  }

  return (
    <div>
      <EventSearch onSearch={filerEvents} />
      <EventList items={getEvents} />
    </div>
  )
}

export default HomePage;