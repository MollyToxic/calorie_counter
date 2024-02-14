import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import InputRadio from "../components/InputRadio";

const Registration = function () {
    const [inputValueName, setinputValueName] = useState('');
    const [inputValueAge, setinputValueAge] = useState();
    const [inputValueHeight, setinputValueHeight] = useState();
    const [inputValueWeight, setinputValueWeight] = useState();
    const [inputValueLogin, setinputValueLogin] = useState('');
    const [inputValuePassword, setinputValuePassword] = useState('');
    const [inputRadioValueGender, setinputRadioValueGender] = useState('WOMAN')
    const [inputRadioValueTarget, setinputRadioValueTarget] = useState('LWeight')
    const [inputRadioValuePhysicalActivity, setinputRadioValuePhysicalActivity] = useState('VL')    

    const [users, setusers] = useState([])


    async function saveUser(){
        // console.log(inputValueAge, inputValueHeight, inputValueWeight, 
        //     inputValueLogin, inputValuePassword, inputRadioValueGender,
        //     inputRadioValueTarget,inputRadioValuePhysicalActivity);

        const newUser = {
            name: inputValueName,
            email: inputValueLogin,
            password: inputValuePassword,
            birth_date: inputValueAge,
            height: inputValueHeight,
            weight: inputValueWeight,
            gender: inputRadioValueGender,
            physical_activity: inputRadioValuePhysicalActivity,
            target: inputRadioValueTarget,
        };

        fetch('http://localhost:8000/wel/', {
                    method: 'POST',
                    headers:{'Content-Type': 'application/json; charset=utf-8'},
                    body: JSON.stringify(newUser),
                })
            .then((response)=> response.status)
    }


    return (
        <form action="" method="post">
            <div className="form form--registration">
                <div className="border">
                    <div className="form_physical-data">
                        <div>
                            <Input inputValue={inputValueName} onChange={setinputValueName} title="Имя" type="text" />
                            <Input inputValue={inputValueAge} onChange={setinputValueAge} title="Дата рождения" type="date" />
                            <Input inputValue={inputValueHeight} onChange={setinputValueHeight} title="Рост" type="number" min="130" max="220" />
                            <Input inputValue={inputValueWeight} onChange={setinputValueWeight} title="Вес" type="number" min="30" max="500" />
                        </div>
                        <div>
                            <Input inputValue={inputValueLogin} onChange={setinputValueLogin} title="Логин" type="text" />
                            <Input inputValue={inputValuePassword} onChange={setinputValuePassword} title="Пароль" type="password" />
                        </div>
                    </div>
                </div>

                <div className="border">
                    <div className="form_other-info">
                        <div>
                            <p >Физическая активность</p>
                            <ul>
                                <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                                    name_radio="physical_activity" title="Очень низкая (минимальная)" type="radio" inputRadioValueDesired="VL" />
                                </li>
                                <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                                    name_radio="physical_activity" inputRadioValueDesired="L"
                                    title="Низкая (сидячяя работа и отсутствие физических нагрузок)" type="radio" />
                                </li>
                                <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                                    name_radio="physical_activity" title="Средняя (редкие, нерегулярные тренировка,активность в быту)" type="radio"
                                    inputRadioValueDesired="A" />
                                </li>
                                <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                                    name_radio="physical_activity" title="Высокая (тренировки 3-5 раз в неделю)" type="radio"
                                    inputRadioValueDesired="H" />
                                </li>
                                <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                                    name_radio="physical_activity" title="Очень высокая (тренировки больше 4-5 раз в неделю)" type="radio"
                                    inputRadioValueDesired="VH" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>Пол</p>
                            <InputRadio onChange={setinputRadioValueGender} inputRadioValue={inputRadioValueGender}
                                name_radio="gender" title="Ж" type="radio" inputRadioValueDesired="WOMAN" />

                            <InputRadio onChange={setinputRadioValueGender} inputRadioValue={inputRadioValueGender}
                                name_radio="gender" title="М" type="radio" inputRadioValueDesired="MAN" />
                        </div>
                        <div>
                            <p>Цель</p>
                            <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                                name_radio="target" title="Похудеть" type="radio" inputRadioValueDesired="LWeight" />
                            <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                                name_radio="target" title="Поддерживать вес" type="radio" inputRadioValueDesired="MWeight" />
                            <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                                name_radio="target" title="Набрать вес" type="radio" inputRadioValueDesired="GWeight" />

                        </div>
                        <div className="form_other-info_button">
                            <Button click={saveUser} title="зарегистрироваться"
                            //  link = "/main" 

                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Registration;
