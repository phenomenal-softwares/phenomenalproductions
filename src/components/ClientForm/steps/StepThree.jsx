"use client";

import styles from "../FormWizard.module.css";
import { useState, useEffect } from "react";

export default function StepThree({ data, onChange, errors }) {
  const handleCheckbox = (e) => {
    onChange("agreed", e.target.checked);
  };

  return (
    <div className={styles.step}>
      <h2>Review Your Details</h2>
      <p>Please confirm that all the information provided is correct before submitting.</p>

      <div className={styles.reviewBox}>
        <h3>Personal Info</h3>
        <p><strong>First Name:</strong> {data.firstName}</p>
        <p><strong>Last Name:</strong> {data.lastName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Company:</strong> {data.company}</p>

        <h3>App/Site Info</h3>
        <p><strong>Platform:</strong> {data.platform}</p>
        <p><strong>Category:</strong> {data.category}</p>
        <p><strong>Description:</strong> {data.description}</p>
      </div>

      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="confirmation"
          checked={data.agreed}
          onChange={handleCheckbox}
        />
        <label htmlFor="confirmation">
          I agree that I have verified the information provided to be correct and ready to submit the form.
        </label>
        {errors.agreed && <div className={styles.error}>{errors.agreed}</div>}
      </div>
    </div>
  );
}
