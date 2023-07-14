import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

function Home() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">CacheStack Inc.</h1>
      </div>
      <br />
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
}

export default Home;
