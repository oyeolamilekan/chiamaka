import "../styles/first.css";

import Countdown from "../components/countdown";
import CoverPhoto from "../assets/images/book-cover.jpg";
import Fade from "react-reveal/Fade";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import React from "react";

export default function Index() {
  return (
    <div>
      <Navbar />
      
      <section className="about-book">
        <div className="text-center mb-3 mt-3">
          <Fade bottom>
            <img
              src={CoverPhoto}
              alt="rounded shadow"
              style={{ width: "100%" }}
            />
          </Fade>
        </div>
        <div className="container mb-5">
          <Fade bottom>
            <p>
              The book "32 secrets teens wish their parents knew" is currently
              available for Pre-order from now until 17th of July. The book will
              be available for collection from 19th of July. To read more about
              the book and to Pre-order, please <Link to="/about_book"> click here.</Link>
            </p>
          <Countdown date={"2020-07-17"} />
          </Fade>
        </div>
      </section>
      <Footer />
    </div>
  );
}
