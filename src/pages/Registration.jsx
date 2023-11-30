import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import InputRadio from "../components/InputRadio";



const Registration = function () {
    const [inputValueAge, setinputValueAge] = useState('');
    const [inputValueHeight, setinputValueHeight] = useState('');
    const [inputValueWeight, setinputValueWeight] = useState('');
    const [inputValueLogin, setinputValueLogin] = useState('');
    const [inputValuePassword, setinputValuePassword] = useState('');
    const [inputRadioValueGender, setinputRadioValueGender] = useState(1)
    const [inputRadioValueTarget, setinputRadioValueTarget] = useState(1)
    const [inputRadioValuePhysicalActivity, setinputRadioValuePhysicalActivity] = useState(1)    

// доделать состояние для других инпутов
    function saveUser(){
        console.log(inputValueAge, inputValueHeight, inputValueWeight, inputValueLogin, inputValuePassword);
    }


    return (
        <div className="registration">
            <div className="border">
                <div className="container_physical_data">
                    <div>
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
                <div className="container_other_info">
                    <div>
                        <p >Физическая активность</p>
                        <ul>
                            <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                             name_radio="physical_activity" title="Очень низкая (минимальная)" type="radio" inputRadioValueDesired="1"/>
                            </li>
                            <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                             name_radio="physical_activity" inputRadioValueDesired="2"
                                title="Низкая (сидячяя работа и отсутствие физических нагрузок)" type="radio" />
                            </li>
                            <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                             name_radio="physical_activity" title="Средняя (редкие, нерегулярные тренировка,активность в быту)" type="radio" 
                             inputRadioValueDesired="3" />
                            </li>
                            <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                              name_radio="physical_activity" title="Высокая (тренировки 3-5 раз в неделю)" type="radio" 
                              inputRadioValueDesired="4" />
                            </li>
                            <li><InputRadio onChange={setinputRadioValuePhysicalActivity} inputRadioValue={inputRadioValuePhysicalActivity}
                             name_radio="physical_activity" title="Очень высокая (Тренировки больше 4-5 раз в неделю)" type="radio" 
                             inputRadioValueDesired="5" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Пол</p>
                        <div className="container_gender">
                            <InputRadio onChange={setinputRadioValueGender} inputRadioValue={inputRadioValueGender} 
                                name_radio="gender" title="Ж" type="radio" inputRadioValueDesired = "1"  />

                            <InputRadio onChange={setinputRadioValueGender} inputRadioValue={inputRadioValueGender}
                                name_radio="gender" title="М" type="radio" inputRadioValueDesired="2"/>
                        </div>
                        <p>Цель</p>
                        <div className="container_gender">
                            <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                             name_radio="target" title="Похудеть" type="radio" inputRadioValueDesired ="1"/>
                            <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                             name_radio="target" title="Поддерживать вес" type="radio" inputRadioValueDesired="2" />
                            <InputRadio onChange={setinputRadioValueTarget} inputRadioValue={inputRadioValueTarget}
                             name_radio="target" title="Набрать вес" type="radio" inputRadioValueDesired="3" />
                        </div>

                    </div>
                    <Button click={saveUser} title="зарегистрироваться" link="/main" />
                </div>
            </div>
 

        </div>
    )
}

export default Registration;
