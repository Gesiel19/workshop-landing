import React from "react";
import curiosity from "../../../assest/desktop/image-curiosity.jpg";
import deepEarth from "../../../assest/desktop/image-deep-earth.jpg";
import nightArcade from "../../../assest/desktop/image-night-arcade.jpg";
import soccer from "../../../assest/desktop/image-soccer-team.jpg";
import car from "../../../assest/desktop/image-grid.jpg";
import above from "../../../assest/desktop/image-from-above.jpg";
import borealis from "../../../assest/desktop/image-pocket-borealis.jpg";
import fisheye from "../../../assest/desktop/image-fisheye.jpg";
import { StyleGallery } from "./StyleSectionInfo";

const SectionInfo = () => {
  return (
    <StyleGallery>
      <div className="galleryHeader">
        <h2>OUR CREATIONS</h2>
        <button>see all</button>
      </div>

      <div className="gallery">
        <figure> 
        <img src={deepEarth} alt="deep Earth" />
        <h3>DEEP <br /> EARTH</h3>
        </figure>
        <figure>
        <img src={nightArcade} alt="Night Arcade" />
        <h3>NIGHT <br /> ARCADE</h3>
        </figure>
        <figure>
        <img src={soccer} alt="Soccer Team" />
        <h3>SOCCER <br /> TEAM VR</h3>
        </figure>
        <figure>
        <img src={car} alt="car" />
        <h3>THE <br /> GRID</h3>
        </figure>
        <figure>
        <img src={above} alt="straigthway" />
        <h3>FROM UP <br /> ABOVE VR</h3>
        </figure>
        <figure>
        <img src={borealis} alt="borealis" />
        <h3>POCKET <br /> BOREALIS</h3>
        </figure>
        <figure>
        <img src={curiosity} alt="curiosity" />
        <h3>THE <br /> CURIOSITY</h3>
        </figure>
        <figure>
        <img src={fisheye} alt="fisheye" />
        <h3>MAKE IT <br /> FISHEYE</h3>
        </figure>

        </div>
        
    </StyleGallery>
  )
}

export default SectionInfo;