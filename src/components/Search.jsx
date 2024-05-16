import React from "react";

import "../styles/App.css";

const Search = function (props) {

    function showMain() {
        props.setMode("main");
    }

    function addProductElement(id) {
        props.products.filter((item) => {
            if (id == item.id) {
                props.productsUser.push(item);
                localStorage.setItem(`${props.local}`, JSON.stringify(props.productsUser));
            }
        })
        props.setProductsUser(props.productsUser)
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