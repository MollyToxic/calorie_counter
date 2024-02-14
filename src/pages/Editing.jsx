import React, { useState } from "react";
import Input from "../components/Input";
import InputRadio from "../components/InputRadio";

const Editing = function () {
    const [inputRadioValueTarget, setinputRadioValueTarget] = useState('LWeight')
    const [inputValueWeight, setinputValueWeight] = useState('');
    const [inputValueHeight, setinputValueHeight] = useState('');
    return (
        <div className="form form--editing">
            <h1>Редактирование профиля</h1>
            <div>
                <p>Текущая цель</p>
                <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                    name_radio="target" title="Похудеть" type="radio" inputRadioValueDesired="LWeight" />
                <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                    name_radio="target" title="Поддерживать вес" type="radio" inputRadioValueDesired="MWeight" />
                <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                    name_radio="target" title="Набрать вес" type="radio" inputRadioValueDesired="GWeight" />
            </div>
            <div>
                <Input inputValue={inputValueWeight} onChange={setinputValueWeight} title="Изменить текущий вес" type="number" min="30" max="500" />
            </div>
            <div>
                <Input inputValue={inputValueHeight} onChange={setinputValueHeight} title="Изменить текущий рост" type="number" min="130" max="220" />
            </div>
        </div>
    )}

export default Editing;