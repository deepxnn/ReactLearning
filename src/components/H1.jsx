const H1 = (props) => {
  const { nameValue, age } = props;
  return (
    <div>
      <h1>{nameValue}</h1>
      <p>{age}</p>
    </div>
  );
};

export default H1;
