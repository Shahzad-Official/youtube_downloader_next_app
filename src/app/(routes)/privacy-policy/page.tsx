import Layout from "@/components/Layout/Layout";
import React from "react";
import styles from "./PrivacyPolicy.module.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy - Youtube Downloader",
  description:
    "Explore our privacy policy for the YouTube Video Downloader, ensuring data security while downloading videos with user-friendly tools.",
};

function PrivacyPolicy() {
  return (
    <Layout>
      <section className={styles.parent}>
        <h2>Privacy Policy</h2>
        <p>
          Privacy Policy Last Updated: <strong>December 10, 2023</strong>
        </p>
        <p>
          Welcome to <strong>YouTube Downloaders</strong> presented by
          Bytestechsol.
        </p>
        <p>
          Hey, thanks for swinging by! We&apos;re all about valuing your privacy
          here. Our Privacy Policy lays out the lowdown on how we handle your
          info as you navigate our website or use our services.
        </p>
        <p>
          When you jump into the YouTube Downloaders experience, you&apos;re
          essentially giving us the green light to the terms outlined in this
          Privacy Policy. Sounds good? Awesome!
        </p>
        <h3>Information We Collect</h3>
        <h4>Personal Information</h4>
        <p>
          We may collect some personal information when you willingly provide
          it, such as:
          <br />
          Email: bytestechsol@gmail.com
          <br />
          This information is gathered through forms on our website or when you
          use specific services.
        </p>
        <h4>Non-Personal Information</h4>
        <p>
          We also collect non-personal information for statistical purposes and
          to improve your experience. This includes:
        </p>
        <ul>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>IP address</li>
          <li>Date and time of access</li>
        </ul>
        <h3>How We Use Your Information</h3>
        <p>
          We put the gathered information to use for different reasons, such as:
        </p>
        <ul>
          <li>Providing and maintaining our services</li>
          <li>Improving our website</li>
          <li>Responding to your inquiries</li>
          <li>Sending occasional emails related to our services</li>
        </ul>
        <h3>Cookies</h3>
        <p>
          Hey! We&apos;re here to make your time on our website awesome. We use
          cookies, which are little helpers storing info on your device. Feel
          free to turn them off in your browser settings, but keep in mind it
          might change up some features on our site. Cheers! 🌟
        </p>
        <h3>Third-Party Disclosure</h3>
        <p>
          We don&apos;t sell, trade, or give away your info. But we might share
          some non-personal stuff with our trusted friends for things like ads
          and marketing. Sounds good?
        </p>
        <h3>Data Security</h3>
        <p>
          While we implement security measures to protect your information, we
          can&apos;t guarantee absolute security. No method of transmission over
          the internet or electronic storage is entirely secure. For added
          security:
        </p>
        <ul>
          <li>
            Your personal information is encrypted during transmission using SSL
            technology.
          </li>
          <li>
            We regularly review our information collection, storage, and
            processing practices to guard against unauthorised access.
          </li>
        </ul>
        <h3>Links to Third-Party Websites</h3>
        <p>
          Quick note: our website links to other sites, and they have their
          privacy policy. We&apos;re not calling the shots on what they&apos;re
          up to.
        </p>
        <p>
          For any questions or concerns regarding this Privacy Policy, feel free
          to reach out to us at <strong>bytestechsol@gmail.com</strong>. Thanks
          for being part of the YouTube Downloaders community!
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at <strong> bytestechsol@gmail.com.</strong>
        </p>
      </section>
    </Layout>
  );
}

export default PrivacyPolicy;
