"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/client-form", label: "Get Started" },
    { href: "/contact", label: "Contact" }
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

        {/* Always-rendered desktop nav */}
        <ul className="navbar-links desktop">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* AnimatePresence for mobile nav */}
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
              {navLinks.map(({ href, label }) => (
                <motion.li key={href} variants={itemVariants}>
                  <Link
                    href={href}
                    className={isActive(href) ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
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
