"use client";

import styles from "../FormWizard.module.css";
import { useEffect, useState } from "react";

const platforms = ["Web", "Android", "iOS"];

const categories = [
  { name: "Educational", examples: "School site, Exam portal, LMS" },
  { name: "Productivity", examples: "Task manager, Note-taking app" },
  { name: "E-commerce", examples: "Online store, Inventory app" },
  { name: "Fintech", examples: "Wallet, Loan app, Budget tracker" },
  { name: "Religious", examples: "Church app, Sermon archive, Donation system" },
  { name: "Entertainment", examples: "Streaming app, Music player, Games" },
  { name: "Health", examples: "Fitness tracker, Appointment booking" },
  { name: "Real Estate", examples: "Property listings, Agent portal" },
  { name: "Booking", examples: "Hotel, Taxi, Event tickets" },
  { name: "Lifestyle", examples: "Recipe app, Travel guide, Fashion" },
  { name: "Utility", examples: "Calculator, Weather app, To-do list" },
  { name: "Social Media", examples: "Chat app, Community forum" },
  { name: "News & Media", examples: "Blog, News aggregator" },
  { name: "Others", examples: "Anything custom-built to fit your brand" },
];

export default function StepTwo({ data, onChange, errors = {} }) {
  // You may keep validation elsewhere now — it's already handled in FormWizard
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className={styles.step}>
      <h2>Tell Us About Your App or Site</h2>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="platform">Select Platform:</label>
        <select
          className={styles.select}
          id="platform"
          name="platform"
          value={data.platform}
          onChange={handleChange}
        >
          <option value="">-- Choose --</option>
          {platforms.map((platform, index) => (
            <option key={index} value={platform}>{platform}</option>
          ))}
        </select>
        {errors.platform && <div className={styles.error}>{errors.platform}</div>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="category">App/Site Category:</label>
        <select
          className={styles.select}
          id="category"
          name="category"
          value={data.category}
          onChange={handleChange}
        >
          <option value="">-- Choose --</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat.name}>
              {cat.name} — e.g. {cat.examples}
            </option>
          ))}
        </select>
        {errors.category && <div className={styles.error}>{errors.category}</div>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="description">Brief Description:</label>
        <textarea
          className={styles.textarea}
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Briefly describe the app or site you want (at least 20 characters)"
          rows={5}
        />
        {errors.description && <div className={styles.error}>{errors.description}</div>}
      </div>
    </div>
  );
}
