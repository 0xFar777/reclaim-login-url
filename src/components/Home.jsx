import { useEffect, useState } from "react";

const Home = () => {
  const [confirmUrl, setConfirmUrl] = useState("");

  const handleChange = (e) => {
    setConfirmUrl(e.target.value);
  };

  const handleClick = () => {
    if (confirmUrl) {
      const link = document.createElement("a");
      link.href = confirmUrl;
      link.rel = "noopener noreferrer";
      link.click();
    }
  };

  return (
    <div style={{ width: "100vw" }}>
      <input
        type="text"
        value={confirmUrl}
        onChange={handleChange}
        style={{
          width: "50vw",
          margin: "0 25vw",
          border: "2px solid #4CAF50",
          borderRadius: "5px",
          fontSize: "16px",
          transition: "border-color 0.3s",
          outline: "none",
          display: "flex",
        }}
        placeholder="Please input link..."
      ></input>
      <button
        onClick={handleClick}
        style={{
          margin: "20px 47vw",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#00F",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        Go To
      </button>
    </div>
  );
};

export default Home;
