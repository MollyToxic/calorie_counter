import React from "react";
import Button from "../components/Button";
import "../styles/App.css"
import Scchedule from "../components/Schedule";

const Main = function () {
    return (<div className="graf">
        <div>   
            <button className="left_btn"></button>     
            <p>Текущая неделя</p>
            <button className="right_btn"></button>
        </div>

        <Scchedule data={[
            {
                "дни недели": "Пн",
                "завтрак": 500,
                // "hot dogColor": "hsl(96, 70%, 50%)",
                "обед": 686,
                // "burgerColor": "hsl(27, 70%, 50%)",
                "ужин": 377,
                // "sandwichColor": "hsl(10, 70%, 50%)",
            },
            {
                "дни недели": "Вт",
                "завтрак": 478,
                // "hot dogColor": "hsl(256, 70%, 50%)",
                "обед": 769,
                // "burgerColor": "hsl(121, 70%, 50%)",
                "ужин": 415,
                // "sandwichColor": "hsl(10, 70%, 50%)",
            },
            {
                "дни недели": "Ср",
                "завтрак": 460,
                "hot dogColor": "hsl(177, 70%, 50%)",
                "обед": 823,
                "burgerColor": "hsl(352, 70%, 50%)",
                "ужин": 220,
                "sandwichColor": "hsl(170, 70%, 50%)",
            },
            {
                "дни недели": "Чт",
                "завтрак": 311,
                "hot dogColor": "hsl(235, 70%, 50%)",
                "обед": 486,
                "burgerColor": "hsl(171, 70%, 50%)",
                "ужин": 482,
                "sandwichColor": "hsl(285, 70%, 50%)",
            },
            {
                "дни недели": "Пт",
                "завтрак": 265,
                "hot dogColor": "hsl(232, 70%, 50%)",
                "обед": 739,
                "burgerColor": "hsl(57, 70%, 50%)",
                "ужин": 328,
                "sandwichColor": "hsl(305, 70%, 50%)",
            },
            {
                "дни недели": "Сб",
                "завтрак": 417,
                "hot dogColor": "hsl(13, 70%, 50%)",
                "обед": 529,
                "burgerColor": "hsl(356, 70%, 50%)",
                "ужин": 276,
                "sandwichColor": "hsl(103, 70%, 50%)",
            },
            {
                "дни недели": "Вс",
                "завтрак": 397,
                "hot dogColor": "hsl(111, 70%, 50%)",
                "обед": 644,
                "burgerColor": "hsl(232, 70%, 50%)",
                "ужин": 354,
                "sandwichColor": "hsl(78, 70%, 50%)",
            }
        ]}/>
    </div>)
}

export default Main;