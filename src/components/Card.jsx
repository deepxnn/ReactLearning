import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia
} from "@mui/material";

const CardComponent = ({service,addToCart,removeFromCart,cartItems,}) => {
  const cartItem = cartItems.find((item) => item.id === service.id);

  const currentQuantity = cartItem? cartItem.quantity: 0;

  const isLimitReached = currentQuantity >= service.available;

  return (
    <Card elevation={3} sx={{width:"20%", mb:3}}>
      <CardMedia
      component="img"
      height="200"
      image={service.image}
      alt={service.title}
      />
      <CardContent>
        <Typography variant="h6">
          {service.title}
        </Typography>

        <Typography>
          Price: ₹{service.price}
        </Typography>

        <Typography>
          Available: {service.available}
        </Typography>

        <Box mt={2}>
          <Button
            variant="contained"
            onClick={() => addToCart(service)}
            disabled={isLimitReached}
          >
            Add
          </Button>

          <Button
            variant="outlined"
            sx={{ ml: 2 }}
            onClick={() =>
              removeFromCart(service)
            }
            disabled={currentQuantity === 0}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
