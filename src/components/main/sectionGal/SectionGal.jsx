import React from "react";
import { StyleSection } from "./StyleSectionGal";
import interactive from "../../../assest/desktop/image-interactive.jpg"

const SectionGal = () => {
    return (
        <StyleSection>
            <figure>
                <img src={interactive} alt="inrective image" />
            </figure>
            <div className="card">
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eaque architecto culpa, sed qui voluptatibus rerum quaerat ratione, quae ducimus repellendus laudantium totam a odit doloribus voluptate doloremque nisi? Dolorem?</p>
            </div>
        </StyleSection>
            )
}

            export default SectionGal