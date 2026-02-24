"use client";

import { useState , useEffect } from "react";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import guripic from "../../public/guripic.webp";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const roles = [
  "Software Developer",
  "Frontend Developer",
  "React Developer",
  "Next.js Developer"
];

const [typedText, setTypedText] = useState("");
const [roleIndex, setRoleIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentRole = roles[roleIndex];
  let typingSpeed = isDeleting ? 50 : 100;

  const timeout = setTimeout(() => {
    if (!isDeleting && charIndex < currentRole.length) {
      setTypedText(currentRole.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);
    } else if (isDeleting && charIndex > 0) {
      setTypedText(currentRole.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);
    } else {
      if (!isDeleting) {
        setTimeout(() => setIsDeleting(true), 800);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, typingSpeed);

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="fb">
      <div className={`navbaarp ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="gurilogo">
          <Image  src={guripic} alt="logo" width={50} height={50} />
         <span className="logo-scroll">
          <span>The Guri Rai</span>
          <span>The Guri Rai</span>
         </span>
        </div>

        <div className="navbaarc1">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#Education">Education</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="menuicon">
          {showMenu ? (
            <IoClose size={28} onClick={() => setShowMenu(false)} />
          ) : (
            <IoMenu size={28} onClick={() => setShowMenu(true)} />
          )}
        </div>

        {showMenu && (
          <div className="mobilemenu">
            <a href="#home" onClick={() => setShowMenu(false)}>Home</a>
            <a href="#about" onClick={() => setShowMenu(false)}>About</a>
            <a href="#skills" onClick={() => setShowMenu(false)}>Skills</a>
            <a href="#Education" onClick={() => setShowMenu(false)}>Education</a>
            <a href="#work" onClick={() => setShowMenu(false)}>Work</a>
            <a href="#contact" onClick={() => setShowMenu(false)}>Contact</a>
          </div>
        )}
      </div>

      <div id="home"></div>

      <div className="herosection">
        <div className="hc1">
          <div className="htextdiv">
            <span className="iamguri">Hi, I'm Guri </span>
            <span className="rai">Rai</span>
          <p>
            I'm a <span className="sdtext">{typedText}</span>
         </p>
          </div>

          <div className="hc1but">
            <a href="#contact">
              <button className="hc1b1">Hire Me</button>
            </a>
            <a href="#work">
              <button className="hc1b2">View Work</button>
            </a>
          </div>
        </div>

        <div className="hc2">
          <Image
            className="gurihc2"
            src={guripic}
            alt="profile"
            // width={350}
            // height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;