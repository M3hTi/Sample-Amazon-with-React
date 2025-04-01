function Error() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "red" }}>💥 Failed to fetch the Data</p>
    </div>
  );
}

export default Error;
