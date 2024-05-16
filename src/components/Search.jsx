import React from "react";

import "../styles/App.css";

const Search = function (props) {

    function showMain() {
        props.setMode("main");
    }

    function addProductElement(id) {
        props.products.filter((item) => {
            if (id == item.id) {
                //проверка на дубликаты
                let isInArray = false;
                props.productsUser.forEach((element) => {
                    if (element.id == item.id) {
                        isInArray = true;
                        element.grams += 100;
                        let count = element.grams /100;

                        element.calories = Math.round(item.calories * count);
                        element.carbohydrates = Math.round(item.carbohydrates * count);
                        element.fats = Math.round(item.fats *count);
                        element.proteins = Math.round(item.proteins * count);
                    }
                })
                if (!isInArray) {
                    props.setProductsUser([
                        ...props.productsUser,
                        {
                            calories: item.calories,
                            carbohydrates: item.carbohydrates,
                            fats: item.fats,
                            grams: item.grams,
                            id: item.id,
                            proteins: item.proteins,
                            title: item.title,
                        },
                    ]);
                }
            }})
        // localStorage.setItem(`${props.local}`, JSON.stringify(props.productsUser));
    }

    return (
        <div id="search" >
            <button className="previous" onClick={showMain}>&#129044;</button>
            <ul>
                {props.products?.map((item) => {
                    return (
                        <li key={item.id}>
                            <div className="product-element">
                                <div className="product-info">
                                    <p className="title-product">{item.title}</p>
                                    <p>калории - {item.calories}</p>
                                    <p>граммы - {item.grams}</p>
                                    <button className="button-product" onClick={() => addProductElement(item.id)}>Добавить</button>
                                </div>
                                <div className="product-pfc">
                                    <p>белки - {item.proteins}</p>
                                    <p>жиры - {item.fats}</p>
                                    <p>углеводы - {item.carbohydrates}</p>
                                </div>
                            </div>
                        </li>)
                })}


            </ul >
        </div>

    );
}

export default Search;