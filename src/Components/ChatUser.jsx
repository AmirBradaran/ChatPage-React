import React, { useState } from "react";
import HeaderUser from "./HeaderUser";
import BodyUser from "./BodyUser";
import FooterUser from "./FooterUser";

export default function ChatUser() {
  const [userName, setUserName] = useState("User 1");
  return (
    <div className="chatUser">
      <HeaderUser userName={userName} />
      <BodyUser />
      <FooterUser />
    </div>
  );
}
