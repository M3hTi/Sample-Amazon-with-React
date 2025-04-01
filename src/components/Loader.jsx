function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: "100vh",
      }}
    >
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default Loader;
