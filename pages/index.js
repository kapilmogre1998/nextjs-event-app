import EventList from "../components/Events/EventList";
import { getAllEvents } from "../dummy-data"

const HomePage = () => {
  const getEvents = getAllEvents();

  return (
    <div>
      <EventList items={getEvents} />
    </div>
  )
}

export default HomePage;