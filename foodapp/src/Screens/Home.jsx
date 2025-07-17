import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodItems, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);

  const loadFetchedData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadFetchedData();
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-carousel">
          <div className="carousel-slide active">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&auto=format&fit=crop&q=60"
              alt="Delicious Burger"
              className="hero-image"
            />
          </div>
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=60"
              alt="Fresh Pizza"
              className="hero-image"
            />
          </div>
          <div className="carousel-slide">
            <img
              src="https://plus.unsplash.com/premium_photo-1673769108032-83c49135e142?w=1200&auto=format&fit=crop&q=60"
              alt="Traditional Momos"
              className="hero-image"
            />
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Delicious Food Delivered</h1>
          <p className="hero-subtitle">
            Order your favorite meals from the best restaurants
          </p>

          <div className="search-container">
            <div className="search-box">
              <input
                type="search"
                placeholder="Search for your favorite food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories Section */}
      <main className="main-content">
        <div className="container">
          {foodCat.length > 0 ? (
            foodCat.map((data) => (
              <section key={data._id} className="category-section">
                <div className="category-header">
                  <h2 className="category-title">{data.CategoryName}</h2>
                  <div className="category-line"></div>
                </div>

                <div className="food-grid">
                  {foodItems.length > 0 ? (
                    foodItems
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => (
                        <Card
                          key={filterItems._id}
                          foodItem={filterItems}
                          options={filterItems.options[0]}
                        />
                      ))
                  ) : (
                    <div className="no-data">No food items found</div>
                  )}
                </div>
              </section>
            ))
          ) : (
            <div className="loading">Loading delicious food...</div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
