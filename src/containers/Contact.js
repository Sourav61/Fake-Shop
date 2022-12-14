import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

var { SocialIcon } = require("react-social-icons");

const Contact = () => {
  return (
    <div id="browser">
      <div id="content">
        <div id="left">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109740.86108784034!2d76.69348820329914!3d30.735210199731238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1658137112078!5m2!1sen!2sin"
            width="100%"
            height="566px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div id="right" className="contact-form">
          <h3 className="text-center">Connect</h3>
          <div id="social" className="text-center">
            <SocialIcon
              network="facebook"
              fgColor="white"
              style={{ margin: 5 }}
            />
            <SocialIcon
              url="https://twitter.com/SouravPahwa9"
              fgColor="white"
              style={{ margin: 5 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/sourav-pahwa-93b4041b6/"
              fgColor="white"
              style={{ margin: 5 }}
            />
            <SocialIcon
              url="mailto:sourav61pahwa@gmail.com"
              bgColor="#dd4b39"
              fgColor="white"
              style={{ margin: 5 }}
            />
          </div>
          <form className="text-center">
            <h3>Send Message</h3>
            <input placeholder="Email" type="email" style={{ height: "2em" }} />
            <input
              placeholder="Subject"
              type="text"
              style={{ height: "2em" }}
            />
            <textarea
              placeholder="Message"
              rows="3"
              style={{ fontSize: "2em" }}
            ></textarea>
            <input placeholder="Send" type="submit" className="submit-form" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
