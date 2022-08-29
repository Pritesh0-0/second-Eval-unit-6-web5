import React from "react";

const Product = () => {
  // Note: this id should come from api

  state = {
    products: []
  }
  componentDidMount = () => {
    fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data })
      console.log(this.state.products)
    })
    .catch(console.log)
  }

  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <div>
       {this.state.productss.map((product) =>  (
        <div>
          <div>
          <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <h6 className="card-subtitle mb-2 text-muted">
              { product.completed &&
                <span>
                Completed
                </span>
              }
              { !product.completed &&
                <span>
                  Pending
                </span>
              }              
              </h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
      
          </div>
        </div>
          ))} 
       </div>
       </div>
        
    
  );
};

export default Product;
