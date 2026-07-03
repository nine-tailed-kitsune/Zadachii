import React from "react";

function Products({products, addNewProduct}) {

    console.log("Products render")

    return (
        <div>
            <button onClick={addNewProduct}>
                Добавить продукт
            </button>
        <ul>
            {products.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    )
}

export default React.memo(Products);