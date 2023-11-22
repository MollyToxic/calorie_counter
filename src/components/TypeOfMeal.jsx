import React, { useState } from "react";
import "../styles/App.css";
import Input from "./Input";


function TypeOfMeal(props) {
    const [products, setProducts] = useState([{ title: 'клубника', id: 1, }, { title: 'вишня', id: 2, }, { title: 'яблоко', id: 3 }]);
    const [mode, setMode] = useState('main')

    function showElements() {
        document.getElementById('main').style.display = "none"
        setMode('search')
    }
    function deleteProductElement(id) {
        const newProducts = products.filter((item) => id != item.id)
        setProducts(newProducts)
    }

    function addProductElement(id) {
        const newProducts = products.filter((item) => id == item.id)
        setProducts(newProducts)
    }
    return (
        <>   
            <div className="form" id='main'>
                <h1>{props.title}</h1>
                <button onClick={showElements}>добавить</button>
                <ul> {products.map((item)=>{
                    return (
                    <li key={item.id}>{item.title}
                        <button onClick={deleteProductElement(item.id)}>Удалить продукт</button>
                    </li>)
                })}

                </ul>
 
            </div>{mode =='search' ? (
                <div id='search'>
                    {/* <Input title='поиск' /> */}
                    <ul>
                        {products.map((item) => {
                                return (<li key={item.id}>{item.title}
                            <button onClick={addProductElement(item.id)}>Добавить продукт</button>
                        </li>)
                    })}
                    </ul>
                </div>
            ): ('')}

        </>
    );

}

export default TypeOfMeal;