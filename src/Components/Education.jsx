import React from "react";

const educationList = [
  {
    school: "Purdue University",
    degree: "Bachelor of Science in Computer and Information Technology",
    description:
      "Attended Purdue University for a Bachelor of Science in Computer and Information Technology. Graduated in 2020.",
  },
  {
    school: "Southwestern Illinois",
    degree: "Associate of Applied Science in Computer Information Systems",
    description:
      "Attending Southwestern Illinois for an Associate of Applied Science in Computer Information Systems.",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}> Education</h2>
      <div className="main-container" style={{ alignContents: "center" }}>
        {" "}
        {educationList.map((education) => (
          <div className="box" key={education.school}>
            <a href={education.url} target="_blank" rel="noopener noreferrer">
              <h3 style={{ flexBasis: "40px" }}>{education.school}</h3>
            </a>
            <h3>{education.degree}</h3>
            <p className="small">{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
