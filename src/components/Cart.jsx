import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia
} from "@mui/material";


export const Cart = ({
  cartItems,
  totalAmount,
  handleBuyNow,
}) => {
  return (
    <Card sx={{width:"20%", mt: 4 }} elevation={4}>
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
                    borderRadius: 2
                  }}
                />
                <Box>
                  <Typography variant="subtitle1">
                    {item.title}
                  </Typography>

                  <Typography>
                    Price: ₹{item.price}
                  </Typography>

                  <Typography>
                    Quantity: {item.quantity}
                  </Typography>

                  <Typography>
                    Subtotal: ₹{item.price * item.quantity}
                  </Typography>
                </Box>
              </Box>
            ))}

            

            <Typography variant="h6" mt={2}>
              Total: ₹{totalAmount}
            </Typography>

            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </>
        ) : (
          <Typography>
            No items in the cart
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
