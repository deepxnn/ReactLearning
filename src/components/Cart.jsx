export const Cart = ({ cartItems }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginTop: 16,
        padding: 16,
      }}
    >
      <h1>Cart</h1>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: 16,
              marginBottom: 8,
            }}
          >
            <h2>{item.title}</h2>
            <p>Price: {item.price}</p>
            <p>No: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};
