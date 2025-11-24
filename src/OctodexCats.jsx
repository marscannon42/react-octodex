import React from "react";
import sponsortocat from "./images/sponsortocat.png";
import boxertocat from "./images/boxertocat.jpg";
import hula_loop_cat from "./images/hula_loop_cat.gif";
import puddle_jumper_cat from "./images/puddle_jumper_cat.jpg";
import scubatocat from "./images/scubatocat.png";
import universetocat from "./images/universetocat.png";
import surftocat from "./images/surftocat.png";
import vinyltocat from "./images/vinyltocat.png";
import dinotocat from "./images/dinotocat.png";

function Header() {
  return (
    <>
     
      <section className="cat-container">
         <section className="best-cats-header">
        <div className="best-cats-title">Best Octodex Cats</div>
      </section>
        <img
          src={sponsortocat}
          width="300"
          height="300"
          className="cat"
          alt="fintech octodex cat"
        />
        <img
          src={boxertocat}
          width="300"
          height="300"
          className="cat"
          alt="boxertocat octodex cat"
        />
        <img
          src={hula_loop_cat}
          width="300"
          height="300"
          className="cat"
          alt="hula loop cat octodex cat"
        />
        <img
          src={puddle_jumper_cat}
          width="300"
          height="300"
          className="cat"
          alt="puddle jumper cat octodex cat"
        />
        <img
          src={scubatocat}
          width="300"
          height="300"
          className="cat"
          alt="scubatocat octodex cat"
        />
        <img
          src={universetocat}
          width="300"
          height="300"
          className="cat"
          alt="securitocat octodex cat"
        />
        <img
          src={vinyltocat}
          width="300"
          height="300"
          className="cat"
          alt="vinyltocat octodex cat"
        />
        <img
          src={surftocat}
          width="300"
          height="300"
          className="cat"
          alt="surftocat octodex cat"
        />
        <img
          src={dinotocat}
          width="300"
          height="300"
          className="cat"
          alt="dintocat octodex cat"
        />
      </section>
    </>
  );
}

export default Header;
