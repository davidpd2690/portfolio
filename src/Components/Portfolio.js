import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const dogs = this.props.data.dogs.map(function (dogs) {
      let projectImage = "images/portfolio/" + dogs.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={dogs.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{dogs.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
         <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some pictures of my dogs.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-thirds s-bgrid-thirds cf"
              >
                {dogs}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
