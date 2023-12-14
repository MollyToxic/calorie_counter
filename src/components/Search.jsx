import React from "react";

import "../styles/App.css";

const Search = function (props) {

    function showMain() {
        props.setMode("main");
    }

    function addProductElement(id) {
        props.products.filter((item) => {
            if (id == item.idProduct) {
                props.productsUser.push(item);
            }
        })
        props.setProductsUser(props.productsUser)
    }

    return (<>
        <div id="search" >
            {/* <Input title='поиск' /> */}
            <ul>
                {props.products?.map((item) => {
                    return (

                            <li key={item.idProduct}>
                            <div className="product" >
                                <p>{item.title}</p>
                                <div className="the_nutritional_value">
                                    <p>белки - {item.proteins}</p>
                                    <p>жиры - {item.fats}</p>
                                    <p>углеводы - {item.carbohydrates}</p>
                                    <p>калории - {item.calories}</p>
                                </div>

                                <button onClick={() => addProductElement(item.idProduct)}>Добавить продукт</button>
                                 </div>
                            </li>

                    )
                })}
            </ul>
            <button onClick={showMain}>обратно</button>
        </div>
    </>

    );
}

export default Search;