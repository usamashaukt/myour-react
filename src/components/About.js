const About = () => {
  return (
    <div className="section about" id="section-about">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">About Me</div>
          <div className="subtitle">My story</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col " style={{ width: "100%" }}> 
            <div className="single-post-text">
              <p>
                Frontend-focused Full Stack Developer with 3+ years of experience building responsive, userfriendly

                web and mobile applications. Proficient in  React.js, Next.js, Vue.js, and
                Angular, with strong skills in creating scalable and maintainable frontend architectures,
                implementing different design patterns, and integrating APIs. Experienced in integrating APIs with
                Node.js, Next.js and delivering custom solutions. , user-centric applications on time
              </p>
            </div>
          </div>
        
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            {/* <li>
              <strong>Age:</strong> 27
            </li> */}
            <li>
              <strong>Phone:</strong> +92-328-5085930
            </li>
            <li>
              <strong>E-mail:</strong> usamashaukat36@gmail.com
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
