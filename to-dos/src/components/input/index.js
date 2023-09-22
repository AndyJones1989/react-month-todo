function Input({ onChange }) {
  return (
    <input
      onChange={onChange}
      style={{
        width: "500px",
        border: "1px solid black",
        borderRadius: "8px",
        padding: "4px",
        backgroundColor: "white",
        color: "black",
      }}
    />
  );
}

export default Input;
