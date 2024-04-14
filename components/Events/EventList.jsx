import EventItem from "./EventItem";
import styleClasses from './EventList.module.css';

const EventList = (props) => {
    const { items } = props;

    return (
        <div className={styleClasses.list} >
            {items.map((item) => <EventItem key={item.id} {...item} />)}
        </div>
    )
}

export default EventList;