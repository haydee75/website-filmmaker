import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://www.instagram.com/s._.martineau/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a
          href="https://twitter.com/SissyDevill"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a
          href="https://vimeo.com/user11258532"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "vimeo"]} />
        </a>
      </div>
    );
  }
}

export default Footer;
