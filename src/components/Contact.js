import React from "react";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-title">
        <h2>Contact</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <h3>If you'd like to chat, send me an e-mail!</h3>
        <a href="mailto:yohankang0425@gmail.com">yohankang0425@gmail.com</a>
        <div className="social-media">
          <p>Or feel free to reach out to me through any of these:</p>
          <div className="sns-links">
            <a href="https://github.com/yohanjkang">
              <img src={require(`../images/github.png`)} alt="" />
            </a>
            <a href="https://www.instagram.com/johnjkang0107/">
              <img src={require(`../images/instagram.png`)} alt="" />
            </a>
            <a href="https://www.facebook.com/john.kang.5623">
              <img src={require(`../images/facebook.png`)} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
