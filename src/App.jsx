import { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import CardComponent from "./components/Card";
import { Cart } from "./components/Cart";
import webImage from "./assets/Web.jpg";
import graphicImage from "./assets/Graphic.png";

const App = () => {
  const [services, setServices] = useState([
    { id: 1, title: "Web Development", price: 1000, available: 2, image:webImage },
    { id: 2, title: "Graphic Design", price: 800, available: 3 ,image:graphicImage},
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (service) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === service.id
      );

      if (existingItem) {
        if (existingItem.quantity >= service.available) {
          return prevItems;
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

  const handleBuyNow = () => {
    setServices((prevServices) =>
      prevServices.map((service) => {
        const cartItem = cartItems.find(
          (item) => item.id === service.id
        );

        if (cartItem) {
          return {
            ...service,
            available:
              service.available - cartItem.quantity,
          };
        }

        return service;
      })
    );

    setCartItems([]);
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity, 0
  );

  return (
    <Container maxWidth={false} sx={{ mt: 4 }}>
      <Typography variant="h4">
        Services
      </Typography>

      {services.map((service) => (
        <Box key={service.id} mb={3}>
          <CardComponent
            service={service}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItems={cartItems}
          />
        </Box>
      ))}
      <Cart
        cartItems={cartItems}
        totalAmount={totalAmount}
        handleBuyNow={handleBuyNow}
      />
    </Container>
  );
};

export default App;
