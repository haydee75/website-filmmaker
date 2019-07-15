import React, { Component, Fragment } from "react";

class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="about">
          <h2>About me</h2>
          <br />
          <p>
            I’m a director, editor and & filmmaker. I was happy to have the
            chance to turn my passion into profession. And I very much intend to
            make my clients happy as well. <br />I offer personal and creative
            services in an open, honest and friendly environment with a wide
            range of proficiencies. Diversity in creativity is what I love!
          </p>
          <br />
          <p>
            Do you have any project in mind ? contact me and let's talk about it
            &nbsp; &#9786;
          </p>
        </div>
        <div className="container">
          <form>
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name..."
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something..."
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default About;
