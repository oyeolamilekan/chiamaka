import "../styles/first.css";

import Fade from "react-reveal/Fade";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import React from "react";
import image from "../assets/images/chiamaka.jpg";

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="jumbo__picture">
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
      </div>
      <section className="about-me p-4">
        <Fade top>
          <h2>
            <b>About me</b>
          </h2>
        </Fade>
        <div className="about-grid">
          <div className="row">
            <div className="col-lg-3 aboutgrid2">
              <Fade left>
                <img src={image} className="img-fluid rounded shadow" alt="Chiamaka Mayowa Osuchukwu"/>
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
      </section>
      <Footer />
    </div>
  );
}
