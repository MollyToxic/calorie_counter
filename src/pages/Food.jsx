import React, { useState, useEffect } from "react";

import TypeOfMeal from "../components/TypeOfMeal";
import Search from "../components/Search";

const Food = function () {
    const [products, setProducts] = useState([]);
    const [dish, setDish] = useState([]);

    const [dishUserBreakfast, setDishUserBreakfast] = useState([]);
    const [productsUserBreakfast, setProductsUserBreakfast] = useState([]);

    const [dishUserLunch, setDishUserLunch] = useState([]);
    const [productsUserLunch, setProductsUserLunch] = useState([]);

    const [dishUserDinner, setDishUserDinner] = useState([]);
    const [productsUserDinner, setProductsUserDinner] = useState([]);

    const [dishUserSnack, setDishUserSnack] = useState([]);
    const [productsUserSnack, setProductsUserSnack] = useState([]);

    const [mode, setMode] = useState("main");

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/dish/')
            .then(response => response.json())
            .then(json => setDish(json))
    }, [])

    useEffect(()=>{
        fetch('http://localhost:8000/api/v1/products/')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, [])
    return (
            <>
            {
                mode == "searchProductB"? (
                        <div className="border">
                        <Search products={products} 
                        setProducts={setProducts} 
                        productsUser={productsUserBreakfast} setProductsUser={setProductsUserBreakfast}                    
                        setMode={setMode} local='product-user-breakfact'/>
                        </div>
                        )
                    :
                mode == "searchDishB" ? (
                    <div className="border">
                        <Search products={dish} setProducts={setDish}
                            productsUser={dishUserBreakfast} setProductsUser={setDishUserBreakfast}
                                setMode={setMode} local='dish-user-breakfact'/>
                    </div>
                )
                    :
                mode == "searchProductL" ? (
                    <div className="border">
                        <Search products={products} setProducts={setProducts}
                            productsUser={productsUserLunch} setProductsUser={setProductsUserLunch}
                        setMode={setMode} local='product-user-lunch'/>
                    </div>
                )             
                :
                mode == "searchDishL" ? (
                    <div className="border">
                        <Search products={dish} setProducts={setDish}
                            productsUser={dishUserLunch} setProductsUser={setDishUserLunch}
                            setMode={setMode} local='dish-user-lunch'/>
                    </div>
                )
                    :
                mode == "searchProductD" ? (
                    <div className="border">
                        <Search products={products} setProducts={setProducts}
                            productsUser={productsUserDinner} setProductsUser={setProductsUserDinner}
                            setMode={setMode} local='product-user-dinner'/>
                    </div>
                ) : 
                mode == "searchDishD" ? (
                    <div className="border">
                        <Search products={dish} setProducts={setDish}
                            productsUser={dishUserDinner} setProductsUser={setDishUserDinner}
                            setMode={setMode} local='dish-user-dinner'/>
                    </div>
                ):
                mode == "searchProductS" ? (
                    <div className="border">
                        <Search products={products} setProducts={setProducts}
                            productsUser={productsUserSnack} setProductsUser={setProductsUserSnack}
                            setMode={setMode} local='product-user-snack'/>
                    </div>
                ) :
                mode == "searchDishS" ? (
                    <div className="border">
                        <Search products={dish} setProducts={setDish}
                            productsUser={dishUserSnack} setProductsUser={setDishUserSnack}
                            setMode={setMode} local='dish-user-snack'/>
                    </div>
                ) :            
                mode=="main" ?  (
                        <div className="food-today">
                        <TypeOfMeal title='завтрак' 
                        products={products}  
                        productsUser={productsUserBreakfast} setProductsUser={setProductsUserBreakfast} 
                        setMode={setMode} choice="searchProductB" choiceD='searchDishB'
                        dish={dish}  
                        local='product-user-breakfact' localDish='dish-user-breakfact'                      
                        dishUser={dishUserBreakfast}  setDishUser={setDishUserBreakfast}
                        />

                        <TypeOfMeal title='обед' 
                        products={products}
                        productsUser={productsUserLunch} setProductsUser={setProductsUserLunch}
                        setMode={setMode} choice="searchProductL" choiceD='searchDishL'
                        dish={dish} 
                        local='product-user-lunch' localDish='dish-user-lunch'
                        dishUser={dishUserLunch}  setDishUser={setDishUserLunch}
                        /> 
                        <TypeOfMeal title='ужин' 
                        products={products} 
                        productsUser={productsUserDinner} setProductsUser={setProductsUserDinner}
                        setMode={setMode} choice="searchProductD" choiceD='searchDishD'
                        dish={dish} 
                        local='product-user-dinner' localDish='dish-user-dinner'
                        dishUser={dishUserDinner} setDishUser={setDishUserDinner}
                        />
                        <TypeOfMeal title='перекус/другое' 
                        products={products} 
                        productsUser={productsUserSnack} setProductsUser={setProductsUserSnack}
                        setMode={setMode} choice="searchProductS" choiceD='searchDishS'
                        dish={dish} 
                        local='product-user-snack' localDish='dish-user-snack'
                        dishUser={dishUserSnack}  setDishUser={setDishUserSnack}
                        />

                        </div >
                    
                    
                    ) : ('')}


            </>
            )

    }
            export default Food;