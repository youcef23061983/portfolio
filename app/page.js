"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiFramer,
  SiFirebase,
  SiSwiper,
  SiVitest,
  SiStripe,
  SiPaypal,
  SiMui,
  SiJsonwebtokens,
} from "react-icons/si";
import { IoShield } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Tooltip } from "react-tooltip";
import { GiAmericanFootballHelmet } from "react-icons/gi";

const Homepage = () => {
  const [formStatus, setFormStatus] = useState(null);
  const form = useRef();

  const projects = [
    {
      name: "/project1.png",
      title: "Hotel Booking Platform",
      description:
        "Full-featured hotel reservation system with payment integration",
      tech: [
        "ReactVite",
        "PostgreSQL",
        "Stripe",
        "PayPal",
        "Firebase Auth",
        "Swiper",
      ],
      url: "https://hotelmalaysia.vercel.app",
    },
    {
      name: "/project2.png",
      title: "E-commerce Clothing Store",
      description:
        "Modern online store with cart functionality and user accounts",
      tech: [
        "ReactVite",
        "PostgreSQL",
        "Stripe",
        "PayPal",
        "Firebase Auth",
        "Framer Motion",
      ],
      url: "https://clothing-ecommerce-phi.vercel.app",
    },
    {
      name: "/project3.png",
      title: "Restaurant Website",
      description:
        "Food delivery platform with online reservations and menu management",
      tech: ["ReactVite", "Prisma", "Stripe", "PayPal"],
      url: "https://elbahjarestaurant.vercel.app",
    },
    {
      name: "/project4.png",
      title: "Gym Management System",
      description:
        "Membership portal with class scheduling and payment processing",
      tech: ["Next.js", "Express", "Prisma", "Next Auth.js"],
      url: "https://gymtoulouse.vercel.app",
    },
    {
      name: "/project5.png",
      title: "Travel Agency Platform",
      description:
        "Multi-language travel booking platform with interactive tours",
      tech: ["Next.js", "PostgreSQL", "next-intl", "Framer Motion"],
      url: "https://petratravel.vercel.app",
    },
  ];
  const frontendTech = [
    { icon: <FaHtml5 size={24} />, name: "HTML5" },
    { icon: <FaCss3Alt size={24} />, name: "CSS3" },
    { icon: <TbBrandJavascript size={24} />, name: "javascript" },

    { icon: <SiReact size={24} />, name: "React" },
    { icon: <SiNextdotjs size={24} />, name: "Next.js" },
    { icon: <SiFirebase size={24} />, name: "Firebase Auth" },
    { icon: <IoShield size={24} />, name: "NextAuth.js" },
    { icon: <TfiWorld size={24} />, name: "next-intl" },

    { icon: <SiTailwindcss size={24} />, name: "Tailwind CSS" },
    { icon: <SiPaypal size={24} />, name: "PayPal" },
    { icon: <SiStripe size={24} />, name: "Stripe" },
    { icon: <SiFramer size={24} />, name: "Framer Motion" },
    { icon: <SiSwiper size={24} />, name: "Swiper" },
    { icon: <SiMui size={24} />, name: "Material UI" },
    { icon: <GiAmericanFootballHelmet size={24} />, name: "react helmet" },
    { icon: <SiVitest size={24} />, name: "Vitest" },
  ];

  const backendTech = [
    { icon: <FaNodeJs size={20} />, name: "Node.js" },
    { icon: <SiExpress size={24} />, name: "Express" },
    { icon: <SiPostgresql size={24} />, name: "PostgreSQL" },
    { icon: <SiPrisma size={24} />, name: "Prisma" },
    { icon: <SiJsonwebtokens size={20} />, name: "JWT" },
    { icon: <SiPaypal size={24} />, name: "PayPal" },
    { icon: <SiStripe size={24} />, name: "Stripe" },
  ];

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
  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const bounce = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
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

  const homeImg = {
    hidden: { opacity: 0 },
    visible: {
      y: [0, 10, -10, 0],
      opacity: 1,
      transition: { delay: 0, duration: 1 },
    },
  };

  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.3, ease: "easeInOut" },
    }),
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div id="ss" className="homeDiv">
        <motion.div
          variants={homeContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="homeDesc"
        >
          <motion.h1 variants={item} className="text-5xl font-bold mb-2">
            Hi, I'm <span className="text-blue-600">Youcef Hank</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-5xl font-semibold mb-6 text-gray-700"
          >
            Junior Full Stack <span className="text-purple-600">PERN</span>{" "}
            Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-4xl font-medium mb-12 text-gray-600 max-w-2xl leading-relaxed"
          >
            I build complete web applications using <strong>React</strong>,{" "}
            <strong>Next.js</strong>, and <strong>Node.js</strong>, with{" "}
            <strong>PostgreSQL</strong> databases. Passionate about crafting
            efficient, user-friendly interfaces backed by robust server-side
            architecture.
          </motion.p>

          <motion.div variants={item} className="flex gap-6">
            <Link
              href="https://github.com"
              target="_blank"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="My GitHub"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/youcefhank"
              target="_blank"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
              data-tooltip-id="linkedin-tooltip"
              data-tooltip-content="My LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={homeImg}
          initial="hidden"
          whileInView="visible"
          className="homeImg"
          viewport={{ once: true }}
        >
          <Image
            src="/photo.png"
            alt="Youcef Hank"
            width={300}
            height={300}
            className="img"
            priority
            style={{ borderRadius: "1rem" }}
          />
        </motion.div>
      </div>

      <section id="tt" className="py-20 mb-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            My <span className="text-blue-600">Tech Stack</span>
          </motion.h2>

          <div className="mb-20">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-center text-gray-700"
            >
              Frontend Development
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {frontendTech.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={bounce}
                  className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex flex-col items-center group"
                  data-tooltip-id={`tech-tooltip-${index}`}
                  data-tooltip-content={tech.name}
                >
                  <div className="w-12 h-12 flex items-center justify-center text-2xl group-hover:text-blue-600 transition-colors">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-500 group-hover:text-gray-700">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-center text-gray-700"
            >
              Backend Development
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {backendTech.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={bounce}
                  className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex flex-col items-center group"
                  data-tooltip-id={`tech-tooltip-${
                    index + frontendTech.length
                  }`}
                  data-tooltip-content={tech.name}
                >
                  <div className="w-12 h-12 flex items-center justify-center text-2xl group-hover:text-purple-600 transition-colors">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-500 group-hover:text-gray-700">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="bb" className="m-4 py-20">
        <h1 className="skillsHeader mb-14">Featured projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={projectsVariants}
              viewport={{ once: true }}
              custom={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <Link href={project.url} target="_blank">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={project.name}
                    alt={project.title}
                    width={600}
                    height={400}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="nn" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Get In <span className="text-blue-600">Touch</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={slideUp}>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div variants={slideUp}>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div variants={slideUp}>
                <label
                  htmlFor="comment"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  value={user.comment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[150px]"
                  placeholder="Your message..."
                  required
                ></textarea>
              </motion.div>

              <motion.div variants={slideUp} className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </motion.div>

              {formStatus && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-4 p-4 rounded-lg text-center ${
                    formStatus.includes("successfully")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {formStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
      {/* Tooltips */}
      <Tooltip id="github-tooltip" />
      <Tooltip id="linkedin-tooltip" />
      {[...frontendTech, ...backendTech].map((tech, index) => (
        <Tooltip key={index} id={`tech-tooltip-${index}`} />
      ))}
    </>
  );
};

export default Homepage;
