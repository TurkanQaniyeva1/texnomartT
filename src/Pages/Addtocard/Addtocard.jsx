import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "../Addtocard/addtocard.css";

const Addtocard = () => {
  const { products, updateQuantity } = useContext(ProductContext);

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + product.quantity * parseFloat(product.price.replace('$', '')), 0);
  };

  return (
   
    <section className="addPage">
      <div className="add">
    <h2>Səbət</h2>
      </div>
          <div className="cart-container">
      <div className="cartTab">
        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th style={{ height: '53px' }}>Product</th>
                <th style={{ height: '53px' }}>Product Name</th>
                <th style={{ height: '53px' }}>Quantity</th>
                <th style={{ height: '53px' }}>Price</th>
                <th style={{ height: '53px' }}>Remove</th>
              </tr>
            </thead>
            <tbody>
            {products.map((product) => (
               <tr key={product.id}>
                 <td>
                   <img src={product.image} alt={product.name} className="product-image" />
                 </td>
                 <td>{product.name}</td>
                 <td>
                   <div className="quantity">
                     <button type="button" className="qty-minus" onClick={() => updateQuantity(product.id, "decrease")}>-</button>
                     <span>{product.quantity}</span>
                    <button type="button" className="qty-plus" onClick={() => updateQuantity(product.id, "increase")}>+</button>
                  </div>
                 </td>
                <td>{product.price}</td>
                <td>
                  <button className="remove">X</button>
                 </td>
               </tr>
             ))}
            </tbody>
          </table>
        </div>
        <div className="action">
          <a href="#" className="woo-shop-button"> < FaLongArrowAltLeft/> Back to Shop</a>
        </div>
      </div>
      <div className="summary-container">
          <div className="cart-summary">
            <div className="totals-title">Products in cart</div>
            <p>Price <span>₼</span></p>
            <p>Cash discount <span>₼</span></p>
            <p>Coupon discount <span>0₼</span></p>
            <p>Delivery costs <span>0₼</span></p>
            <p className="total-price">Total Price <span>{getTotalPrice()} ₼</span></p>
          </div>

          <div className="coupon-container">
            <div className="totals-title">Coupon</div>
            <input type="text" placeholder="Coupon code" />
            <button className="apply-coupon">Apply coupon</button>
          </div>
          <div className="checkout">
            <a href="#" className="checkout-button button alt wc-forward">
              Proceed to checkout
            </a>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Addtocard;
