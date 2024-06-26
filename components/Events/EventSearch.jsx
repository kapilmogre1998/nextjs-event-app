import { useRef } from 'react';
import styleClasses from './EventSearch.module.css';

const EventSearch = (props) => {
    const monthRef = useRef(null);
    const yearRef = useRef(null);

    const submitHandler = (event) => {
        event.preventDefault();
        
        const selectedMonth = monthRef.current.value;
        const selectedYear = yearRef.current.value;
        
        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={styleClasses.form} onSubmit={submitHandler}>
            <div className={styleClasses.control} >
                <label htmlFor="month">Month</label>
                <select name="month" id="month" ref={monthRef} >
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
            <div className={styleClasses.control} >
                <label htmlFor="year">Year</label>
                <select name="year" id="year" ref={yearRef} >
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <button>Find Events</button>
        </form>
    )
}

export default EventSearch;