import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function LoadingPopup({ isOpen, content }) {
  if (!isOpen) return null;
  console.log(content);

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <ClipLoader color="#36d7b7" size={50} />
        <p>{content}...</p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default LoadingPopup;
