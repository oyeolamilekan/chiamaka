import "../styles/footer.css";

import { FaEnvelope, FaInstagram } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer__main text-center bg-black text-white p-5">
        &copy; Chiamaka Mayowa Osuchukwu 2020
        <div className="text-center mt-3">
          {/* <a
            href="https://web.facebook.com/yayi4all?_rdc=1&_rdr"
            className="mr-2"
          >
            <FaFacebook size={30} className="icon-color"/>
          </a>
          <a href="https://twitter.com/Iam_Yayi?s=08" className="mr-2">
            <FaTwitter size={30} className="icon-color"/>
          </a> */}
          <a href="https://www.instagram.com/chiamaka.mayowa/" className="mr-2">
            <FaInstagram size={30} className="icon-color" />
          </a>
          {/* <a href="https://www.linkedin.com/in/omotosho-ahmed-damilare-377b43147" className="mr-2">
            {" "}
            <FaLinkedin size={30} className="icon-color"/>{" "}
          </a> */}
          <a href="mailto:chimayosuchuks2@gmail.com">
            <FaEnvelope size={30} className="icon-color" />{" "}
          </a>
        </div>
        <p className="text-center text-white mt-2">
          Built with love by{" "}
          <a
            href="https://appstate.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Appstate
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
