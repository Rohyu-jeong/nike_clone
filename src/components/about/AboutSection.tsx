import React from "react";
import PropTypes from "prop-types";
import {
  aboutContentStyle,
  aboutSectionImgStyle,
  aboutSectionStyle,
  aboutTitleStyle,
} from "../../style/about/aboutPageStyle";

function AboutSection({ title, content, imageUrl }: any) {
  return (
    <div className="section" style={aboutSectionStyle}>
      <h2 style={aboutTitleStyle}>{title}</h2>
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="section-image object-cover"
          style={aboutSectionImgStyle}
        />
      </div>
      <p style={aboutContentStyle}>{content}</p>
    </div>
  );
}

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AboutSection;
