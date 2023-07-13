import React from "react";
import moment from "moment";
// import styles from './index.styles.module.scss'

const Aboutme = () => {
  const totalExperince = (function () {
    const startDate = moment("2020-12-02");
    const todaysDate = moment();
    var { years, months } = moment.duration(todaysDate.diff(startDate))._data;
    return `${years} Yrs and ${months} months`;
  })();

  return (
    <>
      <div className="header align-items-center mt-2 px-5 w-100 mb-5">
        <div className="row pb-2">
          <div className="col-12 text-right pr-5">
            <h3>
              Ab<span className="text-yellow-theme">o</span>ut me
            </h3>
          </div>
        </div>
        <div className="row w-100 justify-content-center">
          <div className="col-md-6 text-center col-sm-10">
            <img
              className="w-50"
              alt="this cannot be displayed"
              src={`${process.env.PUBLIC_URL}/images/animated/aboutme.gif`}
            />
          </div>
          <div className="col-md-6 col-sm-10 p-sm-3 ">
            <div
              className="p-2 mb-2 d-flex justify-content-between
             rounded-pill border align-items-center"
            >
              <p className="font-weight-bold ml-2 mb-0">
                Expereince : {totalExperince}
              </p>
              <i class="fa-solid fa-briefcase text-dark h4 mr-3"></i>
            </div>
            <div className="text-justify">
              <p>
                Front end developer with experience in designing and building
                responsive web design. Proficient with Design and Back-end
                Frameworks, with extensive knowledge of UX and user psychology.
                I also have done freelancing for about 1 year as a full stack
                web developer and also have effective communication capabilities
                within teams and external interfaces.
              </p>
              <p>
                I have worked in Bootstrap, React, Node express and MongoDB. I
                love to explore electronics and develop smart gadgets as hobby
                that are internet connected and some useful in day to day life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutme;
