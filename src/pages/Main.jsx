import React from "react";
import Button from "../components/Button";

const Main = function (){
    return(
    <div className="form form--main">
        <h1>Меню</h1>
        <Button title="Редактировать профиль" link="/editing"/>
        <Button title="Отчёт за неделю" link="/report" />
        <Button title="Отчёт за сегодня" link="/review_today" />
    </div>)
}

export default Main;