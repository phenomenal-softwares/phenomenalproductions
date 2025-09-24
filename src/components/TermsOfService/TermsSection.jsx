"use client";

import React from "react";
import { motion } from "framer-motion";
import "./TermsSection.css";

const terms = [
  {
    title: "Initial Deposit & Prototype",
    content:
      "A minimum of 40% payment must be made within 7 days of project commencement, by which time a working prototype or concept draft will have been delivered to the client for feedback and approval.",
  },
  {
    title: "Refund Policy",
    content:
      "Any payments made are only refundable within 14 calendar days of active project work. Refunds beyond this window are not guaranteed and will be considered based on the work done so far.",
  },
  {
    title: "Final Delivery & Full Payment",
    content:
      "The complete service or product shall be delivered after the stipulated duration, and only upon confirmation of full payment. No full service will be released without full payment.",
  },
  {
    title: "Mode of Payment",
    content:
      "All payments must be made via bank transfer to the official account designated by Phenomenal Productions. Proof of payment must be sent and acknowledged before proceeding.",
  },
  {
    title: "Revisions & Feedback",
    content:
      "Clients are entitled to up to 2 rounds of revisions during development. Major overhauls after feedback approval may attract extra charges.",
  },
  {
    title: "Timelines & Delays",
    content:
      "Project timelines will be communicated clearly. However, delays caused by client inaction, late feedback, or incomplete resources will lead to adjusted delivery dates.",
  },
  {
    title: "Intellectual Property & Usage Rights",
    content:
      "All code, media, and content remain the property of Phenomenal Productions until full payment is received. Upon payment, the client is granted usage rights, but may not resell or redistribute without written permission.",
  },
  {
    title: "Communication Channels",
    content:
      "Official communication is via email and confirmed phone lines. Phenomenal Productions is not responsible for miscommunication through unofficial platforms.",
  },
  {
    title: "Project Termination",
    content:
      "If the client abandons the project for over 30 days without communication, the project will be considered terminated. Any resumption will attract a reopening fee.",
  },
  {
    title: "Legal Jurisdiction",
    content:
      "All disputes shall be settled under the laws of the Federal Republic of Nigeria, and handled through appropriate legal means within appropriate jurisdiction if necessary.",
  },
];

export default function TermsSection() {
  return (
    <section className="terms-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="heading"
      >
        Terms of Service
      </motion.h2>

      <p className="last-updated">Last updated: 02 July 2024</p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="agreement-intro"
      >
        By engaging with Phenomenal Productions for any service, you agree to the
        following terms:
      </motion.p>

      <ol className="terms-list">
        {terms.map((term, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="term-item"
          >
            <h4 className="term-title">{index + 1}. {term.title}</h4>
            <p className="term-content">{term.content}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
