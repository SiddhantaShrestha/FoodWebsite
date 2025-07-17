"use client";
import DeleteIcon from "@mui/icons-material/Delete"; // Corrected import for Delete icon
import { useDispatchCart, useCart } from "../Components/ContextReducer";

function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="empty-cart-message">
        <div className="empty-cart-icon">🛒</div>
        <div className="empty-cart-text">Your Cart is Empty!</div>
        <p className="empty-cart-subtext">
          Start adding some delicious food to your order.
        </p>
      </div>
    );
  }

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail");
    const response = await fetch("http://localhost:5000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("Order Response:", response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <div className="cart-items-list">
        {data.map((food, index) => (
          <div key={index} className="cart-item-card">
            <div className="item-details">
              <img
                src={food.img || "/placeholder.svg"}
                alt={food.name}
                className="item-image"
              />
              <div className="item-info">
                <h3 className="item-name">{food.name}</h3>
                <p className="item-options">
                  Qty: <span className="item-qty">{food.qty}</span> | Size:{" "}
                  <span className="item-size">{food.size}</span>
                </p>
                <p className="item-price">₹{food.price}/-</p>
              </div>
            </div>
            <button
              type="button"
              className="remove-item-btn"
              onClick={() => {
                dispatch({ type: "REMOVE", index: index });
              }}
            >
              <DeleteIcon />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h1 className="total-price">Total Price: ₹{totalPrice}/-</h1>
        <button className="checkout-btn" onClick={handleCheckOut}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
