import React from "react";
import "./Home.css";
import { useState } from "react";

const items = [
    {
      id: 1,
      title: 'Banana',
      category: 'breakfast',
      price: 15.99,
      img: 'https://m.media-amazon.com/images/I/413Q+GBBZWL.jpg',
      
    },
    {
      id: 2,
      title: 'Strawberries',
      category: 'breakfast',
      price: 13.99,
      img: 'https://hips.hearstapps.com/hmg-prod/images/fresh-strawberry-in-a-clay-plate-on-wooden-table-royalty-free-image-881906660-1551291807.jpg?crop=0.670xw:1.00xh;0.274xw,0&resize=1200:*',
      
    },
    {
      id: 3,
      title: 'Yogurt',
      category: 'breakfast',
      price: 6.99,
      img: 'https://m.media-amazon.com/images/I/51aKvShNPEL._SX522_.jpg',
     
    },
    {
      id: 4,
      title: 'Balckberries',
      category: 'breakfast',
      price: 20.99,
      img: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/28194916/shutterstock_1933979129-1.jpg',
    },
    {
      id: 5,
      title: 'Banana',
      category: 'breakfast',
      price: 15.99,
      img: 'https://m.media-amazon.com/images/I/413Q+GBBZWL.jpg',
    },
    {
      id: 6,
      title: 'Balckberries',
      category: 'breakfast',
      price: 20.99,
      img: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/28194916/shutterstock_1933979129-1.jpg',
    },
    {
      id: 7,
      title: 'Yogurt',
      category: 'breakfast',
      price: 6.99,
      img: 'https://m.media-amazon.com/images/I/51aKvShNPEL._SX522_.jpg',
     
    },
    {
      id: 8,
      title: 'Yogurt',
      category: 'breakfast',
      price: 6.99,
      img: 'https://m.media-amazon.com/images/I/51aKvShNPEL._SX522_.jpg',
     
    },
  ];

export default function Canned() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((itemId) => itemId !== id));
  };
  return (
    <div className="section-center">
    {items.map((item) => {
      const { id, title, img, desc, price } = item;
      const isItemInCart = cart.includes(id);
      return (
        <article key={id} className="menu-item">
          <img src={img} alt={title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">${price}</h4>
              <button onClick={() => handleAddToCart(id)}>
                {isItemInCart ? "-" : "+"}
              </button>
            </header>
          </div>
        </article>
      );
    })}
  </div>
  );
}
