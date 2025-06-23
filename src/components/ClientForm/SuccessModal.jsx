"use client";

import styles from "./SuccessModal.module.css";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessModal({ clientName = "Client" }) {
  const router = useRouter();
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <FaCheckCircle className={styles.successIcon} />
        <h2>Thank You, {clientName}!</h2>
        <p>Your request has been received successfully.</p>
        <p>Our team will reach out to you shortly with the next steps.</p>

        <button className={styles.closeBtn} onClick={() => router.push("/")}>
          Close
        </button>
      </div>
    </div>
  );
}
