import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Editing = function () {
    const [inputValueTarget, setinputValueTraget] = useState('');
    const [inputValueWeight, setinputValueWeight] = useState('');
    const [inputValueHeight, setinputValueHeight] = useState('');
    return (
        <div className="form">
            <p>Редактирование профиля</p>
            <Input inputValue={inputValueTarget} onChange={setinputValueTraget} title="Изменить текущую цель" type="text" />
            <Input inputValue={inputValueWeight} onChange={setinputValueWeight} title="Изменить текущий вес" type="number" min="30" max="500" />
            <Input inputValue={inputValueHeight} onChange={setinputValueHeight} title="Изменить текущий рост" type="number" min="130" max="220" />
        </div>
    )
}

export default Editing;