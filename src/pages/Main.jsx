import React from "react";
import Button from "../components/Button";

const Main = function (){
    return(<div className="form">
        <Button title="Редактирование учётной записи" link=""/>
        <Button title="Корректировка рациона " link="" />
        <Button title="Обзор за..." link="" />
        <Button title="Сегодня" link="" />
    </div>)
}

export default Main;