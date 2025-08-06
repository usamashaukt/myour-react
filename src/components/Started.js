import TypingAnimation from "./TypingAnimation";

const Started = () => {
  return (
    <div className="section started" id="section-started">
      <div className="centrize full-width">
        <div className="vertical-center">
          {/* title */}
          <h1 className="h-title">
            Usama <br />
            Shaukat
          </h1>
          {/* content started */}
          <div className="started-content">
            {/* subtitle */}
            <div className="h-subtitles">
              <div className="h-subtitle typing-subtitle">
                <TypingAnimation />
                {/* Consultant and Mentor, Web Designer, Programmer */}
              </div>
              <span className="typed-subtitle" />
            </div>
            {/* text */}
            <div className="h-text">
              Hello! I am Web App Developer from Paksitan, Islamabad. I have
              rich experience in web site design and building, also I am good at
              React Native, React.js, Next.js, Node.JS. I love to talk with you about your unique idea.
            </div>
            {/* button */}
            <a href="#section-contacts" className="btn">
              <span className="animated-button">
                <span>Contact Me</span>
              </span>
              <i className="icon fas fa-chevron-right" />
            </a>
            {/* mosue button */}
            <a href="#" className="btn mouse-btn" style={{ display: "none" }}>
              <i className="icon fas fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Started;
