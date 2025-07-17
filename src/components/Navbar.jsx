"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaHome,
  FaInfoCircle,
  FaBox,
  FaRocket,
  FaEnvelope,
} from "react-icons/fa";

import "@/styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path || pathname.startsWith(`${path}/`);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About", icon: <FaInfoCircle /> },
    { href: "/products", label: "Products", icon: <FaBox /> },
    { href: "/client-form", label: "Get Started", icon: <FaRocket /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/images/logo1.png"
              alt="Phenomenal Logo"
              width={200}
              height={40}
            />
          </Link>
        </div>

        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>

        <ul className="navbar-links desktop">
          {navLinks.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-icon">{icon}</span>
                <span className="nav-label">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="navbar-links mobile"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              key="mobile-nav"
            >
              {navLinks.map(({ href, label, icon }) => (
                <motion.li key={href} variants={itemVariants}>
                  <Link
                    href={href}
                    className={isActive(href) ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="nav-icon">{icon}</span>
                    <span className="nav-label">{label}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
