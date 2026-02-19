import { Container, Typography, Box } from "@mui/material";
import CardComponent from "./components/Card";
import { Cart } from "./components/Cart";
import { useNavigate } from "react-router";
import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./store/cartSlice";

const App = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const services = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addToCartCall = (service) => {
    dispatch(addToCart(service));
  };

  const removeFromCartCall = (service) => {
    dispatch(removeFromCart(service));
  };

  const handleBuyNow = () => {
    navigate("/cart/453?shop=MyShop");
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Layout>
      <Container maxWidth={false} sx={{ mt: 4 }}>
        <Typography variant="h4">Services</Typography>

        {services.map((service) => (
          <Box key={service.id} mb={3}>
            <CardComponent
              service={service}
              addToCart={addToCartCall}
              removeFromCart={removeFromCartCall}
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
    </Layout>
  );
};

export default App;
