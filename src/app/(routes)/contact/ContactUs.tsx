"use client";
import Layout from "@/components/Layout/Layout";
import React, { ChangeEvent, useState } from "react";
import styles from "./Contact.module.css";
import sendEmail from "@/services/api/sendEmail";
import { PulseLoader } from "react-spinners";
import AppColors from "@/utils/AppColors";
import { toast } from "react-toastify";
import Link from "next/link";

function ContactUs() {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await sendEmail({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        subject: formData.subject,
        message: formData.message,
      });
      console.log(response);
      setFormData((prevFormData) => ({
        ...prevFormData,
        subject: "",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }));
      toast("Your Message has been sent.", {
        type: "success",
        position: "top-center",
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className={styles.parentContainer}>
        <div className={styles.parent}>
          <h1>Contact Us</h1>
          <p>
            Thank you for visiting<Link href={"/"} replace>YouTube Downloaders</Link>!  We appreciate your
            interest in our website. If you have any questions, suggestions, or
            concerns, please feel free to reach out to us using the contact form
            below. Your feedback is valuable to us, and we will do our best to
            respond to your inquiry promptly.
          </p>
          <form
            className={styles.form}
            onSubmit={isLoading ? (e) => {} : handleSubmit}
          >
            <label className={styles.label} htmlFor="firstName">
              First Name
            </label>
            <input
              onChange={handleInputChange}
              className={styles.input}
              placeholder="First Name"
              required
              type="text"
              name="firstName"
              id="firstName"
            />
            <label className={styles.label} htmlFor="lastName">
              Last Name
            </label>
            <input
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Last Name"
              required
              type="text"
              name="lastName"
              id="lastName"
            />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Email"
              required
              type="email"
              name="email"
              id="email"
            />
            <label className={styles.label} htmlFor="subject">
              Subject
            </label>
            <input
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Subject"
              required
              type="subject"
              name="subject"
              id="subject"
            />
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              onChange={handleInputChange}
              className={styles.textArea}
              placeholder="Type Your message here..."
              required
              name="message"
              id="message"
            />
            <button className={styles.button} type="submit">
              {isLoading ? (
                <PulseLoader color={AppColors.backgroundColor} />
              ) : (
                "Contact Now"
              )}
            </button>
          </form>
          <p>
            Please ensure that all the information provided is accurate so that
            we can assist you effectively. We look forward to hearing from you
            and thank you for choosing YouTube Downloaders.
            <br />
            <br />
            Best regards,
            <br />
            <br />
            The YouTube Downloaders Team
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
