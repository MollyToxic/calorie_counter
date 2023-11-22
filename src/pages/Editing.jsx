import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Editing = function () {
    const [inputValueTarget, setinputValueTraget] = useState('');
    const [inputValueWeight, setinputValueWeight] = useState('');
    const [inputValueHeight, setinputValueHeight] = useState('');
    return (
        <div className="form">
            <h1>редактирование профиля</h1>
            <Input inputValue={inputValueTarget} onChange={setinputValueTraget} title="Изменить текущую цель" type="text" />
            <Input inputValue={inputValueWeight} onChange={setinputValueWeight} title="Изменить текущий вес" type="text" />
            <Input inputValue={inputValueHeight} onChange={setinputValueHeight} title="Изменить текущий рост" type="text" />
        </div>
    )
}

export default Editing;