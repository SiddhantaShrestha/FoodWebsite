import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = (props) => {
  let data = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let dispatch = useDispatchCart();

  const handleAddToCard = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.foodItem.img,
        });
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItem.img,
    });
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div className="food-card">
      <div className="card-image">
        <img
          src={props.foodItem.img || "/placeholder.svg"}
          alt={props.foodItem.name}
          className="food-image"
        />
        <div className="card-overlay">
          <button className="quick-add-btn" onClick={handleAddToCard}>
            Quick Add
          </button>
        </div>
      </div>

      <div className="card-content">
        <h3 className="food-title">{props.foodItem.name}</h3>
        <p className="food-description">{props.foodItem.description}</p>

        <div className="card-controls">
          <div className="quantity-size-controls">
            <div className="control-group">
              <label>Qty</label>
              <select
                className="modern-select"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(5), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label>Size</label>
              <select
                className="modern-select"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="price-section">
            <span className="price">₹{finalPrice}</span>
            <button className="add-to-cart-btn" onClick={handleAddToCard}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
