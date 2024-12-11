import React from "react";

export default function FormOfMessage({ Text, Time, Type }) {
  return (
    <div className={`Message ${Type}`}>
      {Text}
      <br />
      <time> {Time} </time>
    </div>
  );
}
