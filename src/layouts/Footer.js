const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <a target="_blank" href="https://www.facebook.com/" data-tooltip="Facebook">
          <i className="icon fab fa-facebook-f" />
        </a>
        <a target="_blank" href="https://www.instagram.com/" data-tooltip="Instagram">
          <i className="icon fab fa-instagram" />
        </a>
        {/* <a target="_blank" href="https://dribbble.com/">
          <i className="icon fab fa-dribbble" />
        </a> */}
        <a target="_blank" href="https://www.linkedin.com/in/muhammad-usama-19a886211/" data-tooltip="LinkedIn">
          <i className="icon fab fa-linkedin-in" />
        </a>
        <a target="_blank" href="https://github.com/usamashaukt" data-tooltip="GitHub">
          <i className="icon fab fa-github" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
