"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FormWizard.module.css";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import SuccessModal from "./SuccessModal";

const TOTAL_STEPS = 3;

export default function FormWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    platform: "",
    category: "",
    description: "",
    agreed: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear error on change
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "Required";
      if (!formData.lastName.trim()) newErrors.lastName = "Required";
      if (!formData.email.trim()) newErrors.email = "Required";
      if (!formData.company.trim()) newErrors.company = "Required";
      if (!formData.phone.trim()) newErrors.phone = "Required";
    } else if (step === 2) {
      if (!formData.platform) newErrors.platform = "Required";
      if (!formData.category) newErrors.category = "Required";
      if (!formData.description.trim()) newErrors.description = "Required";
    } else if (step === 3) {
      if (!formData.agreed)
        newErrors.agreed = "You must agree before submitting";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setShowModal(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("Something went wrong. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>Let’s Build Something Amazing</h2>
        <p className={styles.subtext}>
          Fill the form to get started. We’re excited to work with you!
        </p>

        <p className={styles.stepIndicator}>
          Step {step} of {TOTAL_STEPS}
        </p>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <StepOne
                data={formData}
                onChange={handleChange}
                errors={errors}
              />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <StepTwo
                data={formData}
                onChange={handleChange}
                errors={errors}
              />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <StepThree
                data={formData}
                onChange={handleChange}
                errors={errors}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.progressBarWrapper}>
          <div
            className={styles.progressBar}
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>

        <div className={styles.navBtns}>
          <button onClick={handlePrev} disabled={step === 1}>
            Prev
          </button>
          {step < TOTAL_STEPS ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>

        {showModal && <SuccessModal clientName={formData.firstName} />}
      </div>
    </div>
  );
}
