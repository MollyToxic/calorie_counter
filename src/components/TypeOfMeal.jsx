import React, { useState } from "react";
import "../styles/App.css";

function TypeOfMeal(props) {
    function deleteProductElement(id) {
        const newProduct = props.productsUser.filter((item) => id != item.idProduct)
        props.setProductsUser(newProduct)

    }

    function showElements() {
        props.setMode(props.choice)
    }

    return (
        <div className="main">
            <div>
                <p>{props.title}</p>
                <ul>
                    {   
                        props.productsUser?.map((el) => {
                            return (
                                <li key={el.idProduct}>
                                    <p>{el.title}</p>
                                    <div className="the_nutritional_value">
                                        <p>белки - {el.proteins}</p>
                                        <p>жиры - {el.fats}</p>
                                        <p>углеводы - {el.carbohydrates}</p>
                                        <p>калории - {el.calories}</p>
                                    </div>
                                    <button onClick={() => deleteProductElement(el.idProduct)}>Удалить продукт</button>
                                </li>)
                        })}
                </ul>
            </div>
            <button onClick={showElements}>Добавить</button>
        </div>
    )

}

export default TypeOfMeal;