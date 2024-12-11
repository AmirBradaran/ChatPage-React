import React from "react";

export default function FormOfMessage({ Text, Time, Type }) {
  return (
    <div className={`Message ${Type}`}>
      <h3>
      {Text}
      </h3>
      <br />
      <time> {Time} </time>
    </div>
  );
}
