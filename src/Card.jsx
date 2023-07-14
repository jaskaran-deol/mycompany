import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc, desc, quote, link }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." width={250} height={350} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desc}
            </p>
            {quote &&
              <NavLink to="/contact" className="btn btn-primary">
                Get Quote
              </NavLink>
            }
            {link &&
              <button onClick={() => { window.location.href = link; } } className="btn btn-primary">
               Link
              </button>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
