import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <h1>wdwd</h1>

      <div className="container experience_container">
        <div className="experience_webdev">
          <h3>Web Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML5/CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Flask</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_dotnet">
          <h3>.NET Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>ASP.NET Core</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Entity Framework</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_database">
          <h3>Database</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Neo4j</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_blockchain">
          <h3>Blockchain Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Solidity</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Etheruem</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Rust</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Web3JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
