import React from "react";
import Button from "../components/Button";

const Main = function (){
    return(<div className="form">
        <Button title="Редактирование учётной записи" link=""/>
        <Button title="Корректировка рациона " link="" />
        <Button title="Обзор за..." link="" />
        <Button title="Сегодня" link="/review_today" />
    </div>)
}

export default Main;