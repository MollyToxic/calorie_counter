import React, { useState } from "react";
import "../styles/App.css";


function TypeOfTraing(props) {
    const [traings, setTraings] = useState([{ title: 'бег', id: 1, }, { title: 'растяжка', id: 2, }]);
    const [traingsUser, setTraingsUser] = useState([]);
    const [mode, setMode] = useState('maint')

    function showElements() {
        document.getElementById('maint').style.display = "none"
        document.getElementById('searcht').style.display = "block"
        setMode('searcht')
    }
    function showMain() {
        document.getElementById('searcht').style.display = "none"
        document.getElementById('maint').style.display = "block"
        setMode('maint')
    }
    function deleteProductElement(id) {
        const newTraingsUser = traingsUser.filter((item) => id != item.id)
        setTraingsUser(newTraingsUser)
    }

    function addProductElement(id) {
        const newTraingsUser = traings.filter((item) => id == item.id)
        setTraingsUser(newTraingsUser)
    }
    return (<>
        <div className="search-training" id='maint'>
            {mode == 'maint' ? (
            <>
                <div>
                    <button className="button" onClick={showElements}>Добавить тренировку</button>                   
                </div>
                <div>
                    <ul>
                        {traingsUser.map((item) => {
                            return (
                                <li key={item.id}>{item.title}
                                    <button className="button-product" onClick={() => deleteProductElement(item.id)}>Удалить тренировку</button>
                                </li>)
                        })}
                    </ul>
                </div>

            </>) : ('')}

        </div>

        <div id='searcht'>
            {mode == 'searcht' ? (
                <>
                    {/* <Input title='поиск' /> */}
                    <ul>
                        {traings.map((item) => {
                            return (<li key={item.id}>{item.title}
                                <button className="button-product" onClick={() => addProductElement(item.id)}>Добавить тренировку</button>
                            </li>)
                        })}
                    </ul>
                    <button className="previous" onClick={showMain}>&#129044;</button>
                </>) : ('')}
        </div>

    </>
    );

}

export default TypeOfTraing;