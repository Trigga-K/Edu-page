import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nobis nam dolore nemo rerum modi eius qui temporibus nostrum
            repudiandae officiis, blanditiis inventore consequuntur aliquid sed
            assumenda dolor natus similique!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eos,
            illum fuga consequuntur a dicta sed architecto. In corrupti,
            consequuntur eius asperiores hic deserunt, cupiditate sint minus
            harum rerum consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            voluptas voluptatem eum ipsum labore facilis vitae blanditiis rerum
            rem qui laborum repudiandae sunt, earum unde quae sint temporibus
            ducimus aut!
          </p>
        </h2>
      </div>
    </div>
  );
};

export default About;
