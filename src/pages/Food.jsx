import React, { useState, useEffect } from "react";

import TypeOfMeal from "../components/TypeOfMeal";
import Search from "../components/Search";

const Food = function () {

    const [products, setProducts] = useState([]);

    const [productsUserBreakfast, setProductsUserBreakfast] = useState(()=>{
        const saved = localStorage.getItem("product-user-breakfact");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    const [productsUserLunch, setProductsUserLunch] = useState(() => {
        const saved = localStorage.getItem("product-user-lunch");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    const [productsUserDinner, setProductsUserDinner] = useState(() => {
        const saved = localStorage.getItem("product-user-dinner");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    const [productsUserSnack, setProductsUserSnack] = useState(() => {
        const saved = localStorage.getItem("product-user-snack");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    const [mode, setMode] = useState("main");

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/foods/')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <>
            {
                mode == "searchProductB" ? (
                    <div className="border">
                        <Search products={products}
                            setProducts={setProducts}
                            productsUser={productsUserBreakfast} setProductsUser={setProductsUserBreakfast}
                            setMode={setMode} local='product-user-breakfact' />
                    </div>
                )
                    :
                    mode == "searchProductL" ? (
                        <div className="border">
                            <Search products={products} setProducts={setProducts}
                                productsUser={productsUserLunch} setProductsUser={setProductsUserLunch}
                                setMode={setMode} local='product-user-lunch' />
                        </div>
                    )
                        :
                        mode == "searchProductD" ? (
                            <div className="border">
                                <Search products={products} setProducts={setProducts}
                                    productsUser={productsUserDinner} setProductsUser={setProductsUserDinner}
                                    setMode={setMode} local='product-user-dinner' />
                            </div>
                        ) :
                            mode == "searchProductS" ? (
                                <div className="border">
                                    <Search products={products} setProducts={setProducts}
                                        productsUser={productsUserSnack} setProductsUser={setProductsUserSnack}
                                        setMode={setMode} local='product-user-snack' />
                                </div>
                            ) :
                                mode == "main" ? (
                                    <div className="food-today">
                                        <TypeOfMeal title='завтрак'
                                            products={products}
                                            productsUser={productsUserBreakfast} setProductsUser={setProductsUserBreakfast}
                                            setMode={setMode} choice="searchProductB" local='product-user-breakfact'

                                        />

                                        <TypeOfMeal title='обед'
                                            products={products}
                                            productsUser={productsUserLunch} setProductsUser={setProductsUserLunch}
                                            
                                            setMode={setMode} choice="searchProductL" local='product-user-lunch'

                                        />
                                        <TypeOfMeal title='ужин'
                                            products={products}
                                            productsUser={productsUserDinner} setProductsUser={setProductsUserDinner}
                                            setMode={setMode} choice="searchProductD" local='product-user-dinner'

                                        />
                                        <TypeOfMeal title='перекус/другое'
                                            products={products}
                                            productsUser={productsUserSnack} setProductsUser={setProductsUserSnack}
                                            setMode={setMode} choice="searchProductS" local='product-user-snack'

                                        />

                                    </div >
                                ) : ('')}
        </>)
}
export default Food;