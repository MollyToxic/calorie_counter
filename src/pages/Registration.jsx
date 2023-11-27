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

    return (
        <div className="registration">
            <div className="border">
                <div className="container_physical_data">
                    <div>
                        <Input inputValue={inputValueAge} onChange={setinputValueAge} title="Возраст" type="text" />
                        <Input inputValue={inputValueHeight} onChange={setinputValueHeight} title="Рост" type="text" />
                        <Input inputValue={inputValueWeight} onChange={setinputValueWeight} title="Вес" type="text" />
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
                            <li><InputRadio inputValue={false} name_radio="physical_activity" title="Очень низкая (минимальная)" type="radio" />
                            </li>
                            <li><InputRadio inputValue={true} name_radio="physical_activity"
                                title="Низкая (сидячяя работа и отсутствие физических нагрузок)" type="radio" />
                            </li>
                            <li><InputRadio inputValue={false} name_radio="physical_activity" title="Средняя (редкие, нерегулярные тренировка,активность в быту)" type="radio" />
                            </li>
                            <li><InputRadio inputValue={false} name_radio="physical_activity" title="Высокая (тренировки 3-5 раз в неделю)" type="radio" />
                            </li>
                            <li><InputRadio inputValue={false} name_radio="physical_activity" title="Очень высокая (Тренировки больше 4-5 раз в неделю)" type="radio" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Пол</p>
                        <div className="container_gender">
                            <InputRadio inputValue={true} name_radio="gender" title="Ж" type="radio" />
                            <InputRadio inputValue={false} name_radio="gender" title="М" type="radio" />
                        </div>

                    </div>
                    <Button title="зарегистрироваться" link="/main" />
                </div>
            </div>
 

        </div>
    )
}

export default Registration;
