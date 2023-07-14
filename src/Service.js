import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/1.jpeg";
import img2 from "../src/Pictures/2.png";
import img3 from "../src/Pictures/3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/5.png";
import img6 from "../src/Pictures/img6.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Hybrid Mobile App Development" quote imgsrc={img1} desc="Build a single app compatible with all mobile platforms like Android, iOS, and Windows using frameworks React-Native, Ionic."/>
              <Card title="Web App Development" quote imgsrc={img2} desc="MERN Stack Development for client & server side rendering supporting all browsers and respoinsive views for laptop, tablet & mobile." />
              <Card title="Business Analytics" quote imgsrc={img3} desc="MERN Stack Development for your confidential interal Business logic, maintaince, continues feature development and deployment." />
              <Card title="P2P Consultancy" quote imgsrc={img4} desc="Peer to Peer consultancy for developers and their success, feature development, design pattern." />
              <Card title="Technical Teacher" quote imgsrc={img5} desc="One on One tutor for your technical and professional development growth." />
              <Card title="Cloud Development" quote imgsrc={img6} desc="Designs, builds, analyzes, and maintain your cloud-native applications. (AWS, Google, Digital ocean)." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
