import React, { useState } from "react";

import Countdown from "../components/countdown";
import CoverPhoto from "../assets/images/book-cover.jpg";
import Fade from "react-reveal/Fade";
import Footer from "../components/footer";
import { Modal } from "react-bootstrap";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function AboutBook() {
  const [modal, showModal] = useState(false);
  // const handleOpen = () => showModal(true);
  const handleClose = () => showModal(false);
  return (
    <div>
      <Navbar />
      <div className="container">
        <Fade left>
          <h2 className="mt-3">
            <b>ABOUT THE BOOK</b>
          </h2>
        </Fade>
        <div className="text-center mb-3 mt-3">
          <Fade top>
            <img
              src={CoverPhoto}
              alt="rounded shadow"
              style={{ width: "100%" }}
            />
          </Fade>
        <Fade bottom>
          <p className="mb-3">
            This book was written to unravel the untold secrets of teenagers.
            Despite all the happenings in our lives (right now, in the past, in
            the future to come), there is still room for improvement. As they
            say, “it is never too late for change.” There are a plethora of
            things you may not know about your teenaged children and all you
            want to do is to genuinely help them. Well, search no more, this
            book is all you need. I fervently hope you find the answers you
            seek..
          </p>
        </Fade>
        <Countdown date={"2020-07-17"} />
        <a href="https://paystack.com/pay/smyw4rrr5l" target="_blank" className="btn btn-warning text-white w-50 btn-lg">
        <b>
          Pre Order Book
          </b>
        </a>
      </div>
        </div>

      <Modal show={modal} animation={true} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p className="text-center">
            Sorry this product is currently not available.
          </p>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
}
