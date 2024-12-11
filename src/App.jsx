import React, { useState } from "react";
import HeaderUser from "./Components/HeaderUser";
import BodyUser from "./Components/BodyUser";
import FooterUser from "./Components/FooterUser";

export default function App() {
  const [userName,setUserName]=useState("User 1")
  return (
    <div>
      <HeaderUser/>
      <BodyUser />
      <FooterUser />
    </div>
  );
}
