import React from "react";
import "./CSS/Home.css";
import Navbar  from "./Navbar";
import notebook from "./IMG/notebook.png";
import sem1 from "./IMG/Sem 1 logo icon.jpg";
import sem2 from "./IMG/Sem 2 logo icon.jpg";
import sem3 from "./IMG/Sem 3 logo icon.jpg";
import sem4 from "./IMG/Sem 4 logo icon.jpg";
import sem5 from "./IMG/Sem 5 logo icon.jpg";
import sem6 from "./IMG/Sem 6 logo icon.jpg";
import contact from "./IMG/aboutme.jpg";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar/>
{/* <!-- ----------------------------------- -->
    <!-- show-case area ( Img wala section ) -->
    <!-- ----------------------------------- --> */}

      <section className="showcase-area" id="showcase">
        <div className="middle-content container">
          <h1>Hi there!</h1>
          <p>Welcome to the my Website</p>
          <a href className="btn">
          <i class="fa-solid fa-graduation-cap"></i>
          </a>
        </div>
      </section>

{/* <!-- ----------------------------------- -->
    <!-- about-us ( shoacase ke niche wala ) -->
    <!-- ----------------------------------- --> */}

      <section className="about-us" id="about-us">
        <div className="about-wrapper container">
          <div className="about-text">
            <p className="small">about Website</p>
            <h2>Web app for BCA section</h2>
            <p>
            This web app is only developed for the BCA section of lachoo memorial college. Here you will find Note's for every Semster ,
            Time-table , Sallybus etc.
            </p>
          </div>

          <div className="about-img">
            <img src={notebook} alt="about-img" />
          </div>
        </div>
      </section>

{/* <!-- --------------------- -->
    <!-- All semster -->
    <!-- --------------------- --> */}

      <section className="types-of-food" id="food">
        <h1 className="tittle">All Semster's</h1>

        <div className="type-food-wrapper container">
          <div className="box box1">
            <div className="img">
              <img src={sem1} alt="" />
            </div>

            <div className="middle">
              <h3>Semster 1</h3>
              <Link to="/Semster1" className="btn">
                open
              </Link>
            </div>
          </div>

          <div className="box box1">
            <div className="img">
              <img src={sem2} alt="" />
            </div>

            <div className="middle">
              <h3>Semster 2</h3>
              <Link to="/Semster2" className="btn">
                open
              </Link>
            </div>
          </div>

          <div className="box box1">
            <div className="img">
              <img src={sem3} alt="" />
            </div>

            <div className="middle">
              <h3>Semster 3</h3>
              <Link to="/Semster3" className="btn">
                open
              </Link>
            </div>
          </div>

          <div className="box box1">
            <div className="img">
              <img src={sem4} alt="" />
            </div>

            <div className="middle">
              <h3>Semster 4</h3>
              <Link to="/Semster4" className="btn">
                open
              </Link>
            </div>
          </div>

          <div className="box box1">
            <div className="img">
              <img src={sem5} alt="" />
            </div>

            <div className="middle">
              <h3>Semster 5</h3>
              <Link to="/Semster5" className="btn">
                open
              </Link>
            </div>
          </div>

          <div className="box box1">
            <div className="img">
              <img src={sem6} alt="" />
            </div>

            <div className="middle">
              <h3>Semster 6</h3>
              <Link to="/Semster6" className="btn">
                open
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* <!-- ------------ -->
    <!-- Contect form -->
    <!-- ------------ --> */}

      <section className="contact" id="contact">
        <div className="contact-form-container container">
          <div className="form-img">
            <img src={contact}alt="" />
          </div>

          <div className="form-container">
            <h2>Contact</h2>

            <input type="text" name="" id="" placeholder="Name" />

            <input type="email" name="" id="" placeholder="E-mail" />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Type of Message Here"
            ></textarea>

            <button className="btn">SUBMIT</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-text container">
            <span>Managed by - kamesh singh</span><br />
            <a href="https://www.instagram.com/kamesh_singh22/" target="_kaemsh"><i className="fa-brands fa-instagram"></i>Instagram</a>
            <a href="https://www.linkedin.com/in/kamesh-singh-5baab51ba/" target="_kaemsh"><i class="fa-brands fa-linkedin"></i>linkedin</a>
            <a href="https://github.com/Montu7773" target="_kaemsh"><i className="fa-brands fa-instagram"></i>Github</a>
        </div>
      </footer>
    </>
  );
};

export default Home;
