import React from "react";
import FormOfMessage from "./FormOfMessage";

export default function BodyUser({ chatBody }) {
  const items = chatBody?.map((e, index) => (
    <FormOfMessage key={index} Text={e.Text} Time={e.Time} Type={e.Type} />
  ));
  return <div className="Messages"> {items} </div>;
}
