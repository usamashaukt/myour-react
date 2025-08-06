import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {

};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Language Skills</div>
          <div className="subtitle">Reading and writing</div>
        </div>
        {/* skills items */}
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="single-post-text">
                <p>
                  Proficient in reading, writing, and communication.
                  Skilled in professional and creative content creation.
                  Strong command of grammar, vocabulary, and fluency.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
           

          </ul>
        </div>
      </div>
    </div>
  );
};


export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        <div className="titles">
          <div className="title">Coding Skills</div>
          <div className="subtitle">Developing on</div>
        </div>
        <div className="skills circles">
         
          <ul>
           

            <li>
              <div className="progress p95">
                <div className="percentage"></div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Frontend</div>
              <div className="single-post-text">
                <p>React.js, React Native, Next.js, Vue.js, Angular, HTML5, CSS3, JavaScript, TypeScript</p>
              </div>
            </li>

            <li>
              <div className="progress p85">
                <div className="percentage"></div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Backend</div>
              <div className="single-post-text">
                <p>Node.js, Express.js, RESTful APIs, GraphQL</p>
              </div>
            </li>

            <li>
              <div className="progress p80">
                <div className="percentage"></div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Database</div>
              <div className="single-post-text">
                <p>MongoDB, MySQL, PostgreSQL</p>
              </div>
            </li>

            <li>
              <div className="progress p85">
                <div className="percentage"></div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Tools & Libraries</div>
              <div className="single-post-text">
                <p>Redux, Webpack, Babel, Tailwind CSS, Bootstrap, Material-UI</p>
              </div>
            </li>

            <li>
              <div className="progress p75">
                <div className="percentage"></div>
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Testing</div>
              <div className="single-post-text">
                <p>Jest, Cypress, Mocha, Enzyme</p>
              </div>
            </li>

            <li>
              <div className="progress p90">
                <div className="percentage"></div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Version Control</div>
              <div className="single-post-text">
                <p>Git, GitHub, Bitbucket</p>
              </div>
            </li>

            <li>
              <div className="progress p80">
                <div className="percentage"></div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Other</div>
              <div className="single-post-text">
                <p>CI/CD pipelines, Agile, AWS, Firebase, Vercel</p>
              </div>
            </li>
          </ul>


        </div>
      </div>
    </div>
  );
};
