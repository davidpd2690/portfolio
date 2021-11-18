import React, { Component } from "react";
// import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    // let config = {
    //   num: [-8, 4],
    //   rps: 0.3,
    //   radius: [10, 80],
    //   life: [1, 2],
    //   v: [0.1, 1],
    //   tha: [-1, 1],
    //   // body: "./img/icon.png", // Whether to render pictures
    //   // rotate: [0, 20],
    //   alpha: [0.6, 0],
    //   scale: [1, 0.1],
    //   position: "all", // all or center or {x:1,y:1,width:100,height:100}
    //   color: [["#05c46b","#575fcf"], "#ff0000"], //["#0fbcf9","#575fcf", "#3c40c6","#4bcffa", "#34e7e4", "#00d8d6","#0be881", "#05c46b"]
    //   cross: "dead", // cross or bround
    //   random: null,  // or null,
    //   g: .01,    // gravity
    //    //f: [2, -1], // force
    //   onParticleUpdate: (ctx, particle) => {
    //       ctx.beginPath();
    //       ctx.rect(particle.p.x, particle.p.y, particle.radius * 20, particle.radius * 8);
    //       ctx.fillStyle = particle.color;
    //       ctx.fill();
    //       ctx.closePath();
    //   }
    // };

    return (
      <header id="home">
        {/* <ParticlesBg config={config} type="custom" bg={true} /> */}

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#skills">
                Skills
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-linkedin"></i>Linkedin
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
