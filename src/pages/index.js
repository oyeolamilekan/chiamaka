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
      {/* <div className="jumbo__picture">
        <div className="introduction-text">
          <Fade top>
            <h1>Hello, i'm</h1>
          </Fade>
          <Fade bottom>
            <h1>
              <b>Chiamaka</b>
            </h1>
            <h1 className="underline-title">AUTHOR</h1>
          </Fade>
        </div>
      </div> */}
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
              "The book 32 secrets teens wish their parents knew is currently
              available for Pre-order from now until 17th of July. The book will
              be available for collection from 19th of July. To read more about
              the book and to Pre-order, please <Link to="/about_book"> click here.</Link>"
            </p>
          <Countdown date={"2020-07-17"} />
          </Fade>
        </div>
      </section>
      {/* <section className="about-me p-4">
        <Fade top>
          <h2>
            <b>About me</b>
          </h2>
        </Fade>
        <div className="about-grid">
          <div className="row">
            <div className="col-lg-3 aboutgrid2">
              <Fade left>
                <img
                  src={image}
                  className="img-fluid rounded shadow"
                  alt="Chiamaka Mayowa Osuchukwu"
                />
              </Fade>
            </div>
            <div className="col-lg-9 aboutgrid2">
              <Fade right>
                <p>
                  Chiamaka Mayowa Osuchukwu is the author of this book. She is
                  an entrepreneur at heart. What is more, she is a Senior
                  Secondary School (SSS 1) student of the prestigious Louisville
                  Girls High School Ijebu-Itele, Ogun State. Beautifully enough,
                  Chiamaka is the first born childreen and the only daughter of
                  her parents.
                </p>
                <p>
                  This book titled{" "}
                  <b>"32 Secrets Teens Wish Their Parents Knew" </b>
                  is her first brainchild born out of a strong desire to improve
                  parent-teenager relationship from the perspective of an
                  insightful teenager
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
