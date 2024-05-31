import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './IndexPage.css';
import backGroundVideo from "../../Assets/backgroundVideo.mp4";

const IndexPage = () => {
  return (
    <div className="indexPage">
        <Navbar />
      <video className="backgroundVideo" autoPlay loop muted>
        <source src={backGroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contentOverlay">
        <div className="mainContainerIndexPage">
          <h1>Do you need an immigration lawyer in Atlanta?</h1>
          <h4>If you are looking for a good immigration lawyer, Zulma Lopez is the immigration lawyer you need.</h4>
          <a href='/'><button>Call today 8989-0980-8789</button></a>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
