import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleInputChange}
          placeholder=" "
        />
        <label htmlFor="nameInput" className="placeholder">
          Name
        </label>
      </div>
    </div>
  );
};

export default App;
