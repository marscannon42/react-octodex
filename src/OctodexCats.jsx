import React from "react";
import fintech_cat from "./images/fintech_cat.jpg";
import boxertocat from "./images/boxertocat.jpg";
import hula_loop_cat from "./images/hula_loop_cat.gif";

function Header() {
  return (
    <>
    <section className="cats">
      <img
        src={fintech_cat}
        width="200"
        height="200"
        alt="fintech octodex cat"
      />
      <img
        src={boxertocat}
        width="200"
        height="200"
        alt="boxertocat octodex cat"
      />
      <img
        src={hula_loop_cat}
        width="200"
        height="200"
        alt="hula loop cat octodex cat"
      />
      </section>
    </>
  );
}

export default Header;
