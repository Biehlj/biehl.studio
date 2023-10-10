/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "SWIC Projects",
    description:
      "A simple web app that takes a name and returns it in a variety of formats. Built with JavaScript, HTML, and CSS.",
    url: "https://github.com/Biehlj/School-Projects",
  },
  {
    title: "Home Lab Terraform",
    description: "Created a Terraform file to deploy resources to my home lab utilizing Terraform",
    url: "https://github.com/Biehl-Net/Biehl-net",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed. Includes my experience and design abilities.",
    url: "https://github.com/Biehlj/resume",
  },
  {
    title: "My GitHub",
    description: "My GitHub page with all of my projects.",
    url: "https://github.com/Biehlj",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="main-container">
        <img src={image} alt={imageAltText} className="image-top" />
        <div className="inner">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
