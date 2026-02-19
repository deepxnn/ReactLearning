import { Button } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

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
    </div>
  );
};

export default Cart;
