import { useState } from "react";
import Card from "./components/Card";
import { Cart } from "./components/Cart";

const App = () => {

  const services = [
    { id: 1, title: "Web Development", price: 1000, available: 2 },
    { id: 2, title: "Graphic Design", price: 800, available: 3 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (service) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === service.id
      );

      if (existingItem) {
        if (existingItem.quantity >= service.available) {
          return prevItems; // limit reached
        }

        return prevItems.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...service, quantity: 1 }];
    });
  };

  const removeFromCart = (service) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>

      {services.map((service) => (
        <Card
          key={service.id}
          service={service}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartItems={cartItems}
        />
      ))}

      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
