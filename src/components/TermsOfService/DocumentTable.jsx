"use client";

import React from "react";
import { motion } from "framer-motion";
import "./DocumentTable.css";

const documents = [
  {
    name: "Pricing & Requirements Brochure",
    purpose: "To outline packages, features, pricing, and requirements before client engagement.",
    link: "/docs/Pricing-Requirements-TEMPLATE.pdf",
  },
  {
    name: "Contract Agreement Form",
    purpose: "Formal service agreement signed by both parties.",
    link: "/docs/Contract-Agreement-TEMPLATE.pdf",
  },
  {
    name: "Project Invoice",
    purpose: "Official invoice stating the amount to be paid (initial & full).",
    link: "/docs/Invoice-TEMPLATE.pdf",
  },
  {
    name: "Work Progress Report",
    purpose: "Mid-project update report, especially for long-term projects.",
    link: "/docs/WORK-PROGRESS-REPORT-TEMPLATE.pdf",
  },
  {
    name: "Completion Certificate",
    purpose: "A signed handover document once a project is delivered fully.",
    link: "/docs/PROJECT-COMPLETION-CERTIFICATE-TEMPLATE.pdf",
  },
  {
    name: "Payment Receipt",
    purpose: "Acknowledge receipt of payment by client.",
    link: "/docs/OFFICIAL-PAYMENT-RECEIPT-TEMPLATE.pdf",
  },
  {
    name: "Amendment/Revision Request",
    purpose: "Formal record of any major client change to the project scope.",
    link: "/docs/AMENDMENT-TEMPLATE.pdf",
  },
  {
    name: "Client Feedback Form",
    purpose: "Optional post-delivery review form for testimonials or improvement.",
    link: "/docs/CLIENT-FEEDBACK-TEMPLATE.pdf",
  },
  {
    name: "Service Handover Document",
    purpose: "Lists the files, access credentials, and final deliverables given.",
    link: "/docs/SERVICE-HANDOVER-TEMPLATE.pdf",
  },
];

export default function DocumentTable() {
  return (
    <section className="doc-table-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="doc-heading"
      >
        Official Project Documents
      </motion.h2>

      <motion.div
        className="doc-table-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <table className="doc-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Purpose</th>
              <th>Download Template</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <td>{doc.name}</td>
                <td>{doc.purpose}</td>
                <td>
                  {doc.link !== "#" ? (
                    <a href={doc.link} download className="download-link">
                      Download
                    </a>
                  ) : (
                    <span className="coming-soon">Coming Soon</span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
