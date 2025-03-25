function Error({ msg }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "red" }}>{msg}</p>
    </div>
  );
}

export default Error;
