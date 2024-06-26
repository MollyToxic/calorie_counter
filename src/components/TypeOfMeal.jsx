import "../styles/App.css";
import React, { useState } from "react";
import Button from "../components/Button";

function TypeOfMeal(props) {
    // const [inputValueGrams,setinputValueGrams] = useState();

    function deleteProductElement(id) {
        const newProduct = props.productsUser.filter((item) => id != item.id)
        props.setProductsUser(newProduct);
        localStorage.setItem(`${props.local}`, JSON.stringify(newProduct));
    }

    function showProducts() {
        props.setMode(props.choice)
    }
    return (
        <div className="main">
            <h1>{props.title}</h1>
            <ul>{
                props.productsUser?.map((el) => {
                    return (
                        <li key={el.id}>
                            <div className="product-element">
                                <div className="product-info">
                                    <p className="title-product">{el.title}</p>
                                    <p>калории - {el.calories}</p>
                                    <p>граммы - {el.grams}</p>
                                    
                                    {/* как тут использовать компонент? */}
                                    {/* <Input inputValue={inputValueGrams} onChange={setinputValueGrams} title="Имя" type="text" /> */}

                                    <button className="button-delete" onClick={() => deleteProductElement(el.id)}>x</button>
                                </div>
                                <div className="product-pfc">
                                    <p>белки - {el.proteins}</p>
                                    <p>жиры - {el.fats}</p>
                                    <p>углеводы - {el.carbohydrates}</p>
                                </div>
                            </div>
                        </li>)
                })}
            </ul>

            <div className="main_button">
                <div className="button-1">
                    <button className="button-product" onClick={showProducts}>Добавить еду</button>
                </div>
            </div>
        </div>
    )
}

export default TypeOfMeal;