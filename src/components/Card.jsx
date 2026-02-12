const Card = ({ service, addToCart, removeFromCart, cartItems }) => {
  const cartItem = cartItems.find(
    (item) => item.id === service.id
  );

  const currentQuantity = cartItem ? cartItem.quantity : 0;

  const isLimitReached = currentQuantity >= service.available;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginTop: 16,
        padding: 16,
        borderRadius: 8,
      }}
    >
      <h2>{service.title}</h2>
      <p>Price: {service.price}</p>
      <p>Available: {service.available}</p>

      <button
        onClick={() => addToCart(service)}
        disabled={isLimitReached}
      >
        Add
      </button>

      <button
        onClick={() => removeFromCart(service)}
        disabled={currentQuantity === 0}
        style={{ marginLeft: 10 }}
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
