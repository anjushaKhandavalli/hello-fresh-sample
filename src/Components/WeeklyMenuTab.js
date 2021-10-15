import * as PropTypes from "prop-types";
import '../App.css';
import {foodItems} from "../mockData/Receipes";

const weeks = {
    week1: {
        id: "week1",
        dates: "Oct 09 - Oct 15",
        foodItemsIndexStartWith: 0
    },
    week2: {
        id: "week2",
        dates: "Oct 16 - Oct 22",
        foodItemsIndexStartWith: 9
    },
    week3: {
        id: "week3",
        dates: "Oct 23 - Oct 29",
        foodItemsIndexStartWith: 18
    },
    week4: {
        id: "week4",
        dates: "Nov 06 - Nov 12",
        foodItemsIndexStartWith: 27
    },
    week5: {
        id: "week5",
        dates: "Nov 13 - Nov 19",
        foodItemsIndexStartWith: 36
    },
}

const WeeklyMenuTab = ({weekSpan, setWeekSpan, setItems}) => {

    const handleChange = (event) => {
        const weekId = event.target.value
        console.log("weekId", weekId)
        const weekSpanDates = weeks[weekId].dates
        setWeekSpan(weekSpanDates);

        const foodItemsStartIndex = weeks[weekId].foodItemsIndexStartWith
        setItems(foodItems.slice(foodItemsStartIndex, foodItemsStartIndex + 9));
    };

    return (
        <div className="menuHeader">
            <p className="menuFor">{weekSpan ? `Menu for ${weekSpan}` : `Please select the week to show foodItems`}</p>
            <div className="menuButtons">
                <button onClick={handleChange} value={weeks.week1.id}>{weeks.week1.dates}</button>
                <button onClick={handleChange} value={weeks.week2.id}>{weeks.week2.dates}</button>
                <button onClick={handleChange} value={weeks.week3.id}>{weeks.week3.dates}</button>
                <button onClick={handleChange} value={weeks.week4.id}>{weeks.week4.dates}</button>
                <button onClick={handleChange} value={weeks.week5.id}>{weeks.week5.dates}</button>
            </div>
        </div>
    );
}

WeeklyMenuTab.propTypes = {
    weekSpan: PropTypes.string,
    onClick: PropTypes.func,
    weeks: PropTypes.shape({
        week1: PropTypes.shape({
            foodItemsIndexStartWith: PropTypes.number,
            dates: PropTypes.string,
            id: PropTypes.string
        }),
        week2: PropTypes.shape({
            foodItemsIndexStartWith: PropTypes.number,
            dates: PropTypes.string,
            id: PropTypes.string
        }),
        week3: PropTypes.shape({
            foodItemsIndexStartWith: PropTypes.number,
            dates: PropTypes.string,
            id: PropTypes.string
        }),
        week4: PropTypes.shape({
            foodItemsIndexStartWith: PropTypes.number,
            dates: PropTypes.string,
            id: PropTypes.string
        }),
        week5: PropTypes.shape({
            foodItemsIndexStartWith: PropTypes.number,
            dates: PropTypes.string,
            id: PropTypes.string
        })
    })
};

export default WeeklyMenuTab;