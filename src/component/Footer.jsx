import React from "react";
import Logo from "./Logo";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Footer = () => {
  return (
    <div className="bg-black pt-10 p-5 lg:px-0">
      <div className="footer sm:footer-horizontal  text-neutral-content ">
        <Logo />
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Baby Care</a>
          <a className="link link-hover">Sick People Service</a>
          <a className="link link-hover">Elderly Service</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-2 items-center justify-center">
            <a
              href="https://github.com/hsagor703"
              target="_blank"
              className="link link-hover"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.facebook.com/sagor.sagorhasan.127"
              target="_blank"
              className="link link-hover"
            >
              <FaFacebook size={20} color="#1877F2" />
            </a>
            <a
              href="https://super-manatee-de004f.netlify.app/"
              target="_blank"
              className="link link-hover"
            >
              <CgProfile size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jonyshagor703/"
              target="_blank"
              className="link link-hover"
            >
              <FaLinkedin color="#0077b5" size={20} />
            </a>
          </div>
        </nav>
      </div>
        <p className="text-center text-sm pt-5">
          All Reserve by @ <span className="linear-text">Care Haven</span> 2026
        </p>
    </div>
  );
};

export default Footer;
