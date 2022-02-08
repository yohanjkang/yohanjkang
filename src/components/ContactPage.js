import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <h2>If you'd like to chat, send me an e-mail!</h2>
      <div className="email">
        <img src="/images/mail_icon.png" alt="" />
        <a href="mailto: yohankang0425@gmail.com">yohankang0425@gmail.com</a>
      </div>
    </div>
  );
}
