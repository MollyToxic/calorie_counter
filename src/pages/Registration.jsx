import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import InputRadio from "../components/InputRadio";



const Registration = function () {
    const [inputValueAge, setinputValueAge] = useState('');
    const [inputValueHeight, setinputValueHeight] = useState('');
    const [inputValueWeight, setinputValueWeight] = useState('');



    return (
        <div >
            <h1>Пол</h1>
            <InputRadio inputValue={true} name="gender" title="Ж" type="radio" />
            <InputRadio inputValue={false} name="gender" title="М" type="radio" />
            <Input inputValue={inputValueAge} onChange={setinputValueAge} title="Возраст" type="text" />
            <Input inputValue={inputValueHeight} onChange={setinputValueHeight} title="Рост" type="text" />
            <Input inputValue={inputValueWeight} onChange={setinputValueWeight} title="Вес" type="text" />
            <h2>Физическая активность</h2>
            <ul>
                <li><InputRadio inputValue={false} name="physical_activity" title="Очень низкая" type="radio" />
                    <p>Минимальная</p></li>
                <li><InputRadio inputValue={true} name="physical_activity" title="Низкая" type="radio" />
                    <p>Сидячяя работа и отсутствие физических нагрузок</p></li>
                <li>            <InputRadio inputValue={false} name="physical_activity" title="Средняя" type="radio" />
                    <p>Редкие, нерегулярные тренировка,активность в быту</p></li>
                <li><InputRadio inputValue={false} name="physical_activity" title="Высокая" type="radio" />
                    <p>Тренировки 3-5 паз в неделю</p>
                </li>
                <li><InputRadio inputValue={false} name="physical_activity" title="Очень Высокая" type="radio" /><p>Тренировки больше 4-5 раз в неделю</p></li>
            </ul>
        </div>
    )
}

export default Registration;
