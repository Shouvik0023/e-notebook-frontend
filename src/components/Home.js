import React from "react";
import "./Home.css";
import {Link} from "react-router-dom"

function Home() {

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div className="note">
            <Link className="circle" to="/addnote">
            <div className="plus1"></div>
            <div className="plus1 plus2"></div>
            </Link>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
