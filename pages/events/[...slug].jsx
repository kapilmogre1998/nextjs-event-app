import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/Events/EventList";
import ResultTitle from "../../components/Events/ResultTitle";
import ErrorAlert from "../../components/common/error-alert/ErrorAlert";

const FliteredEvents = () => {
    const router = useRouter();

    const filterQuery = router.query.slug;

    if (!filterQuery) {
        return <p>Loading...</p>
    }

    const numMonth = +filterQuery[1];
    const numYear = +filterQuery[0];

    if (isNaN(numMonth) || isNaN(numYear) || numMonth > 12 || numMonth < 1 || numYear > 2030 || numYear < 2000) {
        return (
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values</p>
            </ErrorAlert>
        )
    }

    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

    if (!filteredEvents || !filteredEvents.length) {
        return (
            <ErrorAlert>
                <p>No events found for the chosen filter!</p>
            </ErrorAlert>
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <div>
            <ResultTitle {...{ date }} />
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FliteredEvents