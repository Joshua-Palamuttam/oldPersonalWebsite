import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./resume-components/education";
import Experience from "./resume-components/experience";
import Skills from "./resume-components/skills";
import ResumePicture from "../images/Joshua_Palamuttam_Profile_Pic.jpg";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={ResumePicture}
                alt="resume picture"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Joshua Palamuttam</h2>
            <h4 style={{ color: "grey" }}>Software Engineer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              A highly-motivated computer professional, who graduated with a
              Computer Science degree from Rose-Hulman Institute of Technology
              ’19, with the enthusiasm to accept new challenges. The software
              engineering positions I have been in have given me hands-on work
              experience working on application design, development, and quality
              assurance using agile practices, and writing clean code.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Fishers, Indiana</p>
            <h5>Phone</h5>
            <p>(408) 841-6194</p>
            <h5>Email</h5>
            <p>joshpal97@gmail.com</p>
            <h5>Web</h5>
            <p>JoshuaPalamuttam.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Rose-Hulman Institute of Technology"
              schoolDescription="Bachelor of Science in Computer Science"
            />

            <h2>Experience</h2>

            <Experience
              startYear={"February 2020"}
              endYear={"May 2020"}
              companyName={"Kaiser Permanente Genetics"}
              jobTitle="Junior Dot Net Analyst, San Jose, CA"
              jobDescription="Main purpose was to do research and development for different applications used by the Genetics Department
              · Responsibilities for this job include gathering requirements along with developing and supporting applications
              · Made applications with the Kaiser tech stack of primarily .Net Core MVC applications, with a SQL Database
              · Occasionally made Batch Files, or Excel VBA scripts to aid Lab Technicians in thier duties"
            />

            <Experience
              startYear={"May 2019"}
              endYear={"February 2020"}
              companyName={"DMI"}
              jobTitle="Software Engineer, Indianapolis, IN"
              jobDescription="Helped create a POC for Kar Global to optimize lot operations at a car auction site, using Angular, Node.js,
              AWS serverless, SQL (2 months)
              · Helped build a physics engine called ISCAAN for Allison Transmission to simulate a transmission (7 months)
              · The majority of Allison Transmission’s proprietary math was done using C++, which was then passed to a
              Angular, .Net Core, SQL stack, using Entity Framework Core
              · Because of ISCAAN’s large nature, the project was designed to use a hexagonal software architecture
              · Built Microsoft Teams Chat bot for DMI, using LUIS an Azure Cognitive Service (NLP) with a .Net Core back
              end (1 month)
              · All projects used Azure Devops to adhere to SAFe agile practices, such as CI/CD, unit and integration testing"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
