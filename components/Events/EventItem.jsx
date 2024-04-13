import Link from "next/link";
import styleClasses from './EventItem.module.css';
import Button from "../common/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
    const { title, date, location, image, id } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n')

    return (
        <div className={styleClasses.item} >
            <img src={'/' + image} alt="" />
            <div className={styleClasses.content} >
                <div>
                    <h2>{title}</h2>
                    <div className={styleClasses.date} >
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={styleClasses.address} >
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styleClasses.actions} >
                    <Button navigate={`/events/${id}`} >
                        <span>Explore Event</span>
                        <span className={styleClasses.icon} ><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EventItem;