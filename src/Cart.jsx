import {
  Button,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const shop = searchParams.get("shop");

  return (
    <div>
      <p>{params.cartId}</p>
      <p>{shop}</p>
      <Button
        variant="contained"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      <div>
        <Card sx={{ width: "20%", mt: 4 }} elevation={4}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Cart
            </Typography>

            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <Box
                    key={item.id}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={2}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        width: 150,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1">{item.title}</Typography>

                      <Typography>Price: ₹{item.price}</Typography>

                      <Typography>Quantity: {item.quantity}</Typography>

                      <Typography>
                        Subtotal: ₹{item.price * item.quantity}
                      </Typography>
                    </Box>
                  </Box>
                ))}

                <Button>Pay Now</Button>
              </>
            ) : (
              <Typography>No items in the cart</Typography>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
