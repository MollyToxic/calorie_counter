import React, { useState, useEffect } from "react";

import TypeOfMeal from "../components/TypeOfMeal";
import Search from "../components/Search";

const Food = function () {
    const [products, setProducts] = useState([]);
    const [productsUserBreakfast, setProductsUserBreakfast] = useState([]);
    const [productsUserLunch, setProductsUserLunch] = useState([]);
    const [productsUserDinner, setProductsUserDinner] = useState([]);
    const [productsUserSnack, setProductsUserSnack] = useState([]);

    const [mode, setMode] = useState("main");

    useEffect(()=>{
        fetch('http://localhost:8000/product/')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, [])

    return (
            <>
            {
                mode == "searchProductB"? (
                        <div className="border">
                        <Search products={products} setProducts={setProducts} 
                        productsUser={productsUserBreakfast} setProductsUser={setProductsUserBreakfast}                    
                        setMode={setMode}/>
                        </div>
                        )
                    :
                mode == "searchProductL" ? (
                    <div className="border">
                        <Search products={products} setProducts={setProducts}
                            productsUser={productsUserLunch} setProductsUser={setProductsUserLunch}
                            setMode={setMode} />
                    </div>
                )             
                :
                mode == "searchProductD" ? (
                    <div className="border">
                        <Search products={products} setProducts={setProducts}
                            productsUser={productsUserDinner} setProductsUser={setProductsUserDinner}
                            setMode={setMode} />
                    </div>
                ) : 
                mode == "searchProductS" ? (
                    <div className="border">
                        <Search products={products} setProducts={setProducts}
                            productsUser={productsUserSnack} setProductsUser={setProductsUserSnack}
                            setMode={setMode} />
                    </div>
                ) :            
                    (
                        <div className="border">
                        <TypeOfMeal title='завтрак' products={products} setProductsUser={setProductsUserBreakfast} 
                        productsUser={productsUserBreakfast} setMode={setMode} choice="searchProductB"
                        />
                        <TypeOfMeal title='обед' products={products} setProductsUser={setProductsUserLunch}
                            productsUser={productsUserLunch} setMode={setMode} choice="searchProductL"
                        />
                        <TypeOfMeal title='ужин' products={products} setProductsUser={setProductsUserDinner}
                            productsUser={productsUserDinner} setMode={setMode} choice="searchProductD"
                        />
                        <TypeOfMeal title='перекус/другое' products={products} setProductsUser={setProductsUserSnack}
                            productsUser={productsUserSnack} setMode={setMode} choice="searchProductS"
                        />

                        </div >
                    
                    
                    )}


            </>
            )

    }
            export default Food;