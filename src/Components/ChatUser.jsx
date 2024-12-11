import React, { useState } from "react";
import HeaderUser from "./HeaderUser";
import BodyUser from "./BodyUser";
import FooterUser from "./FooterUser";

export default function ChatUser() {
  const [userName, setUserName] = useState("User 1");
  const [chatBody, setChatBody] = useState([
    {
      Text: "Hello Mr.JJ",
      Time: "11:00 AM",
      Type: "received",
    },
    {
      Text: "Hello Doctor",
      Time: "11:30 AM",
      Type: "sent",
    },
    {
      Text: "How are you ?",
      Time: "12:00 PM",
      Type: "received",
    },
  ]);
  const handleMessage = (Text) => {
    setChatBody([
      ...chatBody,
      {
        Text: Text,
        Time: new Date().toLocaleTimeString(),
        Type: "sent",
      },
    ]);
  };
  return (
    <div className="chatUser">
      <HeaderUser userName={userName} />
      <BodyUser chatBody={chatBody} />
      <FooterUser handleMessage={handleMessage} />
    </div>
  );
}
