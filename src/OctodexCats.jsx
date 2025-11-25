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

import Cat from "./Cat";

function OctodexCats() {
  const Cats = [
    //3rd filmtocats
    {
      number: "#146:",
      name: "Sponsortocat",
      imageUrl: sponsortocat,
      imageAlt: "Sponsortocat octodex cat",
    },
    {
      number: "#145:",
      name: "Boxertocat",
      imageUrl: boxertocat,
      imageAlt: "Hula Loop Cat octodex cat",
    },
    {
      number: "#144:",
      name: "Hula Loop Cat",
      imageUrl: hula_loop_cat,
      imageAlt: "Hula Loop Cat octodex cat",
    },
    {
      number: "#143:",
      name: "Puddle Jumper Cat",
      imageUrl: puddle_jumper_cat,
      imageAlt: "Puddle Jumper Cat octodex cat",
    },
    {
      number: "#142:",
      name: "Scubatocat",
      imageUrl: scubatocat,
      imageAlt: "Scubatocat octodex cat",
    },
    {
      number: "#140:",
      name: "Universetocat",
      imageUrl: universetocat,
      imageAlt: "Universe octodex cat",
    },
    {
      number: "#140:",
      name: "Surftocat",
      imageUrl: surftocat,
      imageAlt: "Surftocat octodex cat",
    },
    {
      number: "#139:",
      name: "Vinyltocat",
      imageUrl: vinyltocat,
      imageAlt: "Vinyltocat octodex cat",
    },
    {
      number: "#138:",
      name: "Dinotocat",
      imageUrl: dinotocat,
      imageAlt: "Dinotocat octodex cat",
    },
  ];

  return (
    <ul className="photo-container">
      {Cats.map((cat, key) => {
        return (
          <Cat
            number={cat.number}
            name={cat.name}
            imageUrl={cat.imageUrl}
            imageAlt={cat.imageAlt}
            key={key}
          />
        );
      })}
    </ul>
  );
}

export default OctodexCats;
