import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container" id="contact-body">
        <div className="col-md-10">
          <div className="jumbotron">
            <h1 className="display-4">Contact Me</h1>
            <p className="lead">
              <br />
              If you would like to reach out, please send me a message or email
              me at
              <br />
              <a
                href="mailto:aguizaro@ucsc.edu"
                style={{ textDecoration: "none" }}
              >
                aguizaro@ucsc.edu
              </a>
            </p>
          </div>
        </div>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd9G9vQ5BUWe1wR-_yvxPZDTbsw2mkzR9vkQuI51cD26sctag/viewform?embedded=true">
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
