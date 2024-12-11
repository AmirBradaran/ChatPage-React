import React, { useState } from "react";

export default function FooterUser({ handleMessage }) {
  const [inp, setInp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleMessage(inp);
    setInp("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message ..."
        required
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button type="submit" disabled={!inp}>
        Enter
      </button>
    </form>
  );
}
