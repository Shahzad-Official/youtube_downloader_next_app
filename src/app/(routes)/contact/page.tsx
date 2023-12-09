import Layout from "@/components/Layout/Layout";
import React from "react";
import styles from "./Contact.module.css";

function ContactUs() {
  return (
    <Layout>
      <div className={styles.parentContainer}>
        <div className={styles.parent}>
          <h1>Contact Us</h1>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="firstName">First Name</label>
            <input className={styles.input} placeholder="First Name" required  type="text" name="firstName" id="firstName" />
            <label className={styles.label} htmlFor="lastName">Last Name</label>
            <input className={styles.input} placeholder="Last Name" required  type="text" name="lastName" id="lastName" />
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input}  placeholder="Email" required type="email" name="email" id="email" />
            <label className={styles.label} htmlFor="subject">Subject</label>
            <input className={styles.input} placeholder="Subject" required  type="subject" name="subject" id="subject" />
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea className={styles.textArea} placeholder="Type Your message here..." required name="message" id="message" />
            <button className={styles.button} type="submit">Send Now</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
