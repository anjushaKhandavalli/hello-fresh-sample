import {useState} from "react";
import Header from "./Components/Header";
import WeeklyMenuTab from "./Components/WeeklyMenuTab";
import FoodItems from "./Components/Fooditems";
import './App.css';

function App() {
    const [weekSpan, setWeekSpan] = useState("");
    const [items, setItems] = useState([]);

    return (
        <div className="App">
            <Header/>
            <div className="container">
                <WeeklyMenuTab weekSpan={weekSpan} setWeekSpan={setWeekSpan} setItems={setItems}/>
                <FoodItems items={items}/>
            </div>
        </div>
    );
}

export default App;
