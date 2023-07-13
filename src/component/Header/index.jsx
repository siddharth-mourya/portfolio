import React from "react";
import styles from "./index.styles.module.scss";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";

const Header = () => {
  const downloadResume = () => {
    fetch(`${process.env.PUBLIC_URL}/files/Siddharth-Mourya-Resume.pdf`).then(
      (response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "Siddharth-Mourya.pdf";
          a.click();
        });
        //window.location.href = response.url;
      }
    );
  };

  return (
    <>
      <div className="header d-flex container-fluid justify-content-center align-items-center vh-100">
        <div className="row w-100 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10 order-2 order-md-1 text-md-left text-lg-left text-center">
            <h2>
              <span className="text-warning">Siddharth Mourya</span>
            </h2>
            <h6>Software Engineer</h6>
            <span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Hi there , I am software Engineer currently working with GlobalLogic India. "
                    )
                    .pauseFor(1000)
                    .typeString(
                      "I keep interest in Web dev, and tinkering with electronics."
                    )
                    .start();
                }}
                options={{
                  delay: 1,
                }}
              />
            </span>
            <button
              onClick={downloadResume}
              className="btn btn-outline-warning mt-3 text-dark"
            >
              Resume <FontAwesomeIcon icon={faDownload} className="pl-1" />{" "}
            </button>
            <div className="d-flex my-3 justify-content-lg-start justify-content-md-start justify-content-center">
              <a
                href="https://www.linkedin.com/in/siddharth-mourya/"
                target="_blank"
              >
                <i className="fa-brands text-dark fa-linkedin h3"></i>
              </a>
              <a href="https://github.com/siddharth-mourya" target="_blank">
                <i className="fa-brands fa-github text-dark h3 ml-3"></i>
              </a>
              {/* <a href="https://github.com/siddharth-mourya" target="_blank">
                <img
                  title="HackerEarth"
                  alt="Sid's HackerEarth"
                  width="28px"
                  height="28px"
                  src="https://camo.githubusercontent.com/5a2fbfc25d1ab46b48c492cf1853c59386603de8a69b7c92d5998c53178735be/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f73696d706c652d69636f6e7340332e312e302f69636f6e732f6861636b657265617274682e737667"
                  data-canonical-src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/hackerearth.svg"
                />
              </a> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-10 order-1 order-md-2 d-flex justify-content-center">
            <div
              className={`${styles["profile-image-container"]} position-relative`}
            >
              <img
                className="rounded-circle"
                src={`${process.env.PUBLIC_URL}/images/profile/profile-pic.jpeg`}
              />
              <img
                src={logo}
                className={`${styles["App-logo"]} position-absolute`}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
