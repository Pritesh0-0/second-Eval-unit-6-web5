import React from "react";
import styles from "./Product.module.css"
const Product = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);


  const product = { id: 1 };
  return (
    
    <div data-cy={`product-${product.id}`}>
      
          
            {products?.map((product) => (
              <div className={styles.card}>
              <h3 className = {styles.h3} data-cy="product-name">{product.name}</h3>
              <h6 data-cy="product-description" className = {styles.h6}>{product.description}</h6>
              <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove Item from Cart</button>
      </div>
              </div>
            ))}
          
          
          
     
      
      
          </div>
     
        
    
  );
};

export default Product;
