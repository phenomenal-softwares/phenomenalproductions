"use client";

import styles from "../FormWizard.module.css";

export default function StepOne({ data, onChange, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div>
      <label className={styles.label}>
        First Name
        <input
        className={styles.input}
          type="text"
          name="firstName"
          value={data.firstName || ""}
          onChange={handleChange}
          placeholder="e.g., John"
        />
        {errors.firstName && <div className={styles.error}>{errors.firstName}</div>}
      </label>

      <label className={styles.label}>
        Last Name
        <input
        className={styles.input}
          type="text"
          name="lastName"
          value={data.lastName || ""}
          onChange={handleChange}
          placeholder="e.g., Doe"
        />
        {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}
      </label>

      <label className={styles.label}>
        Email
        <input
        className={styles.input}
          type="email"
          name="email"
          value={data.email || ""}
          onChange={handleChange}
          placeholder="e.g., you@example.com"
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}
      </label>

      <label className={styles.label}>
        Company / Organization
        <input
        className={styles.input}
          type="text"
          name="company"
          value={data.company || ""}
          onChange={handleChange}
          placeholder="e.g., Phenomenal Productions"
        />
        {errors.company && <div className={styles.error}>{errors.company}</div>}
      </label>

      <label className={styles.label}>
        Phone Number
        <input
        className={styles.input}
          type="tel"
          name="phone"
          value={data.phone || ""}
          onChange={handleChange}
          placeholder="e.g., 08012345678"
        />
        {errors.phone && <div className={styles.error}>{errors.phone}</div>}
      </label>
    </div>
  );
}
