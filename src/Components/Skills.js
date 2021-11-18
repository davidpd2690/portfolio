import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  // getRandomColor() {
  //   let letters = "0123456789ABCDEF";
  //   let colors = ["0fbcf9",]
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  getRandomColor() {
    let colors = ["#3c40c6","#0fbcf9","#00d8d6","#05c46b",]
    
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
        <section id="skills">
            <Slide left duration={1300}>
            <div className="row skill">
                <div className="three columns header-col">
                <h1>
                    <span>Skills</span>
                </h1>
                </div>

                <div className="nine columns main-col">
                <p>{skillmessage}</p>

                <div className="bars">
                    <ul className="skills">{skills}</ul>
                </div>
                </div>
            </div>
            </Slide>
        </section>
    );
  }
}

export default Resume;
