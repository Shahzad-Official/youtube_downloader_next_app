import Layout from "@/components/Layout/Layout";
import React from "react";
import styles from "./PrivacyPolicy.module.css";
import { Metadata } from "next";
import CustomHead from "@/Schemas/Other/CustomOgHead";
export const metadata: Metadata = {
  title: "Privacy Policy - Youtube Downloader",
  description:
    "Explore our privacy policy for the YouTube Video Downloader, ensuring data security while downloading videos with user-friendly tools.",
};

function PrivacyPolicy() {
  return (
    <Layout>
      <CustomHead
        description={metadata.description || ""}
        pageUrl="https://youtube-downloaders.com/privacy-policy/"
        title={metadata.title?.toString() ?? ""}
      />
      <section className={styles.parent}>
        <h1>Privacy Policy</h1>
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
        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>
          We may collect some personal information when you willingly provide
          it, such as:
          <br />
          Email: bytestechsol@gmail.com
          <br />
          This information is gathered through forms on our website or when you
          use specific services.
        </p>
        <h3>Non-Personal Information</h3>
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
        <h2>How We Use Your Information</h2>
        <p>
          We put the gathered information to use for different reasons, such as:
        </p>
        <ul>
          <li>Providing and maintaining our services</li>
          <li>Improving our website</li>
          <li>Responding to your inquiries</li>
          <li>Sending occasional emails related to our services</li>
        </ul>
        <h2>Cookies</h2>
        <p>
          Hey! We&apos;re here to make your time on our website awesome. We use
          cookies, which are little helpers storing info on your device. Feel
          free to turn them off in your browser settings, but keep in mind it
          might change up some features on our site. Cheers! 🌟
        </p>
        <h2>Third-Party Disclosure</h2>
        <p>
          We don&apos;t sell, trade, or give away your info. But we might share
          some non-personal stuff with our trusted friends for things like ads
          and marketing. Sounds good?
        </p>
        <h2>Data Security</h2>
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
        <h2>Links to Third-Party Websites</h2>
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
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at <strong> bytestechsol@gmail.com.</strong>
        </p>
      </section>
    </Layout>
  );
}

export default PrivacyPolicy;
