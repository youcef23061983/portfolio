"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { name: "Home", href: "ss" },
    { name: "Skills", href: "tt" },
    { name: "Projects", href: "bb" },
    { name: "Contact", href: "nn" },
  ];

  const [activeLink, setActiveLink] = useState("");
  const [showLinks, setShowLinks] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (element) {
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,

        behavior: "smooth",
      });

      setActiveLink(id);
    }
  };

  const handleLinkClick = (id) => {
    setShowLinks(false);
    setTimeout(() => scrollToSection(id), 300);
  };

  return (
    <nav className="navbar">
      <div className="logoham">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>
        <button
          type="button"
          className="btnHam"
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaAlignJustify className="img" />
        </button>
      </div>

      <ul className={`${showLinks ? "links show-nav" : "links"}`}>
        {links.map((link) => (
          <li key={link.href}>
            <button
              className="btnLink"
              onClick={() => handleLinkClick(link.href)}
              style={{
                color: activeLink === link.href ? "#2F2E31" : "white",
                backgroundColor: activeLink === link.href ? "white" : "#2F2E31",
              }}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
