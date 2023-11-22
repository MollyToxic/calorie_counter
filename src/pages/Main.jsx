import React from "react";
import Button from "../components/Button";

const Main = function (){
    return(<div className="form">
        <Button title="Редактирование учётной записи/рациона" link=""/>
        <Button title="Отчёт" link="/report" />
        <Button title="Сегодня" link="/review_today" />
    </div>)
}

export default Main;