import Footer from "../components/footer";
import IlorinHomeFestival from "../assets/images/image3.jpeg";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import PassPortImage from "../assets/images/image2.jpeg";
import React from "react";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 mt-4 text-center mb-2">
            <img src={PassPortImage} alt="Yayi" className="img-responsive" />
          </div>
          <div className="col-md-9">
            <h3>
              <b>MY PROFILE.</b>
            </h3>
            <p>
              I am a young social and serial entrepreneur, public speaker,
              copywriter, business developer, highly enthusiastic and
              well-versed customer support consultant and best-selling author of
              the book, <b>“How to bring your customers back”.</b>
            </p>
            <p>
              Passionately interested in community development through business
              growth by guiding business owners on how to offer professional
              services to customers in a bid to retain and ensure their
              re-patronage.
            </p>
            <p>
              Over the years, I have shared relevant knowledge and experiences
              on different platforms both online and offline and also worked
              for several organizations both within and outside the country. I
              have managed businesses in Nigeria and even co-founded some, while
              still working remotely for companies outside Nigeria as an
              experienced customer support representative and a professional
              copywriter.
            </p>
            <p>
              Here is what Lana White, the head of customer support team of a
              Canadian based company I once worked with as a customer support
              representative has to{" "}
              <a href=" https://drive.google.com/file/d/1C687vtmT71v2aGQAE1CljsxsuQa2jZep/view?usp=sharing">
                say about me:
              </a>
            </p>
            <p>
              Also, I strongly believe that the best thing you can do for
              humanity is to lose yourself in the service of others. That is why
              as a social entrepreneur, I have in the last five years mentored,
              coached and provided intellectual resources for over fifty
              start-ups especially in the area of customer retention and I feel
              confident to say that they are all doing amazingly well today.
              Also, I'm the co-convener of the upcoming first of its kind FOOD
              FESTIVAL in the entire North-Central Nigeria; The ILORIN FOOD
              FESTIVAL.
            </p>
          </div>
          <div className="col-md-8">
            <h4>
              <b>Why ilorin food festival?</b>
            </h4>
            <p>
              Following the availability of youth and the growing pop culture
              among them, Ilorin is becoming an experimental hub for businesses.
              Startups like Fashions, Aesthetics, Hotels, Nightclubs, Grocery
              stores, Gas station, Education, Tech, Food business, and many
              others have recorded a massive increase in recent time. On top of
              the list is FOOD BUSINESS. As an initiative, our idea is to create
              a platform which enables the youth in the city to get to connect
              using the most booming businesses as a tool.
            </p>
            <p>
              As a serial entrepreneur, I started O-yayi Enterprise after the
              proposal was shortlisted as one of the winning proposals for the
              2018 Graduate Entrepreneurship Funds by Bank of Industry and I am
              the co-founder of RedOlives and also doubles as the Lead-marketing
              manager. We are into productions of both plantain and potatoes
              chips in Ilorin, Kwara state. Putting all these experiences
              together, I’ll recommend you get a copy of my book “How to bring
              your customers back” so you can learn real-life approaches on how
              to bring your customers back.
            </p>
            <p>
              In this book, I shared tips on how you can know what your
              customers want from your business, how to resolve their
              complaints, how to reward them for their loyalty and how to
              befriend them. I also provided drafts which you can tweak in-line
              with your kind of business to ask your customers if they have any
              concerns, to let them know you’ll get back to them as soon as you
              hear back from your team in a situation whereby you need to talk
              to your team to resolve their complaints and lots more.
            </p>
            <p>
              If you are interested in knowing more about the book and also to
              submit an order, please <Link to="/about_book">click here:</Link>
            </p>
          </div>
          <div className="col-md-4 mt-5">
            <img
              src={IlorinHomeFestival}
              alt="Ilorin Home festival"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
