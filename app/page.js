"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Homepage = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [formStatus, setFormStatus] = useState(null);
  const form = useRef();

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }
  }, []);

  const skills = [
    "Html",
    "Css",
    "Javascript",
    "React",
    "React Query",
    "Nextjs",
    "Framer Motion",
    "Firebase",
    "Swiper",
  ];

  const projects = ["/project1.png", "/project2.png", "/project3.png"];
  const [user, setUser] = useState({ name: "", email: "", comment: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation check
    if (!user.name || !user.email || !user.comment) {
      alert("Please enter your information");
      return; // Return early to prevent further execution
    }

    emailjs
      .sendForm("service_vgkozvc", "template_sv5btsr", form.current, {
        publicKey: "_ISOAOSTfbmyXLWd5",
      })
      .then(
        () => {
          setFormStatus("Message sent successfully!");
          setUser({ name: "", email: "", comment: "" });
          setTimeout(() => {
            setFormStatus(null);
          }, 5000);
        },
        (error) => {
          setFormStatus(`Failed to send message: ${error.text}`);
        }
      );
  };

  const homeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const homeChidren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const homeImg = {
    hidden: { opacity: 0 },
    visible: {
      y: [0, 10, -10, 0],
      opacity: 1,
      transition: { delay: 1, duration: 1 },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05 },
    }),
  };

  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.2, ease: "easeInOut" },
    }),
  };

  return (
    <>
      <div
        id="ss"
        style={{
          marginTop: `${navbarHeight}px`,
          height: `calc(100vh - ${navbarHeight}px)`,
        }}
        className="homeDiv"
      >
        <motion.div
          variants={homeContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="homeDesc"
        >
          <motion.h1 variants={homeChidren}>hi, i am youcef hank</motion.h1>
          <motion.p variants={homeChidren}>
            I am a Frontend Developer skilled in building responsive and
            interactive web applications. With expertise in React and Next.js, I
            turn designs into smooth, visually appealing user experiences. I
            focus on clean code, performance, and delivering high-quality
            interfaces.
          </motion.p>
          <motion.div variants={homeChidren} className="iconsDiv">
            <Link href="https://github.com" target="_blank" className="iconImg">
              <FaGithubSquare size={24} className="img" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="iconImg"
            >
              <FaLinkedin className="img" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={homeImg}
          initial="hidden"
          whileInView="visible"
          className="homeImg"
        >
          <Image
            src="/photo3.png"
            alt="Youcef Hank"
            width={300}
            height={300}
            className="img"
            priority
          />
        </motion.div>
      </div>
      <div id="tt" className="skillsDiv">
        <h1 className="skillsHeader">my skills</h1>
        <div className="skills">
          {skills.map((skill, index) => (
            <motion.button
              variants={liVariants}
              initial="hidden"
              whileInView="visible"
              key={index}
              custom={index}
              className="skill"
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </div>
      <div id="bb" className="skillsDiv">
        <h1 className="skillsHeader">my projects</h1>

        <div className="projectsDiv">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectsVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              className="project"
            >
              <Link href="https://linkedin.com" target="_blank">
                <div className="projectImageContainer">
                  <img
                    src={project}
                    className="img"
                    alt={`Project ${index + 1}`}
                  />
                  <div className="projectOverlay">
                    <button className="overlayText">Project {index + 1}</button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div id="nn" className="skillsDiv">
        <h1 className="skillsHeader">contact me</h1>
        <div className="loginContainer">
          <form ref={form} onSubmit={sendEmail} className="form">
            <label htmlFor="name" className="inputLabel">
              Full Name:
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={handleChange}
                className="input"
              />
            </label>
            <br />
            <br />

            <label htmlFor="email" className="inputLabel">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
                className="input"
              />
            </label>
            <br />
            <br />

            <label htmlFor="comment" className="inputLabel">
              Comment:
              <textarea
                name="comment"
                id="comment"
                value={user.comment}
                onChange={handleChange}
                className="input "
                style={{ height: "20rem" }}
              />
            </label>
            <br />
            <br />

            <button type="submit" className="overlayText">
              Send
            </button>
          </form>
          {formStatus && (
            <div className="formStatusMessage" style={{ marginTop: "-1rem" }}>
              {formStatus}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
