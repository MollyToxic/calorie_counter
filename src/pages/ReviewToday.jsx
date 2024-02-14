import React from "react";
import Button from "../components/Button";

const ReviewToday = function () {
    return (<div className="form form--review">
        <Button title="Добавить блюдо" link="/food" />
        <Button title="Добавить тренировку" link="/traing" />
    </div>)
}

export default ReviewToday;