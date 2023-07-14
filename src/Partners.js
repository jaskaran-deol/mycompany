import React from "react";
import Card from "./Card";
import truck from "../src/Pictures/truck.png";
import lux from "../src/Pictures/lux.jpeg";
import boolean from "../src/Pictures/boolean.png";

function Partners() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Partners</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Pathfinder flatbeds Ltd" imgsrc={truck} link="https://www.quicktransportsolutions.com/truckingcompany/ontario/pathfinder-flatbeds-ltd-usdot-3934453.php"/>
              <Card title="Luxury Motorcars" imgsrc={lux} link="https://www.instagram.com/luxe.motorcars/?hl=en" />
              <Card title="Boolean Technologies" imgsrc={boolean} link="https://booleantechinc.com/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
