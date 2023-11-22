import React, { useState } from "react";
import "../styles/App.css";
import Input from "./Input";


function TypeOfMeal(props) {
    const [products, setProducts] = useState([{ title: 'клубника', id: 1, }, { title: 'вишня', id: 2, }, { title: 'яблоко', id: 3 }]);
    const [productsUser, setProductsUser] = useState([]);
    const [mode, setMode] = useState('main')

    function showElements() {
        document.getElementById('main').style.display = "none"
        document.getElementById('search').style.display = "block"
        setMode('search')
    }
    function showMain(){
        document.getElementById('search').style.display = "none"
        document.getElementById('main').style.display = "block"
        setMode('main')
    }
    function deleteProductElement(id) {
        const newProductsUser = productsUser.filter((item) => id != item.id)
        setProductsUser(newProductsUser)
    }

    function addProductElement(id) {
        const newProductsUser = products.filter((item) => id == item.id)
        setProductsUser(newProductsUser)
    }
    return (<>
           <div id='main'>
            {mode == 'main' ? (<div >
                <h1>{props.title}</h1>
                <button onClick={showElements}>добавить</button>
                <ul>
                    {productsUser.map((item) => {
                        return (
                            <li key={item.id}>{item.title}
                                <button onClick={() => deleteProductElement(item.id)}>Удалить продукт</button>
                            </li>)
                    })}
                </ul>
            </div>

            ) : ('')}

            </div>
 
        <div id = 'search'>
            {mode == 'search' ? (
                <div className="form">
                    {/* <Input title='поиск' /> */}
                    <ul>
                        {products.map((item) => {
                            return (<li key={item.id}>{item.title}
                                <button onClick={() => addProductElement(item.id)}>Добавить продукт</button>
                            </li>)
                        })}
                    </ul>
                    <button onClick={showMain}>обратно</button>
                </div>
            ) : ('')}

        </div>
 
        </>
    );

}

export default TypeOfMeal;