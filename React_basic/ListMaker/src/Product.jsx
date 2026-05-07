import React from "react";

function Product({ product, removeProduct }) {

    return (

        <div className="product">

            <h2 className="product__name">
                {product.name}
            </h2>

            <p className="product__detail">
                Price: ₹{product.price}
            </p>

            <p className="product__detail">
                Quantity: {product.quantity}
            </p>

            <p className="product__total">
                Total: ₹{product.price * product.quantity}
            </p>

            <button
                className="product__btn"
                onClick={() => removeProduct(product.id)}
            >
                Remove
            </button>

        </div>

    );

}

export default Product;