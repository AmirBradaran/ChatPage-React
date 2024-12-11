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
      Type: "received"
    },
    {
      Text: "Hello Doctor",
      Time: "11:30 AM",
      Type: "sent"
    },
    {
      Text: "How are you ?",
      Time: "12:00 PM",
      Type: "received"
    }
  ]);
  return (
    <div className="chatUser">
      <HeaderUser userName={userName} />
      <BodyUser chatBody={chatBody} />
      <FooterUser />
    </div>
  );
}
