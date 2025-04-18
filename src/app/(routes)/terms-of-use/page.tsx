import Layout from "@/components/Layout/Layout";
import React from "react";
import styles from "./TermsOfUse.module.css";
import { Metadata } from "next";
import CustomHead from "@/Schemas/Other/CustomOgHead";
export const metadata: Metadata = {
  title: "Terms Of Use - Youtube Downloader",
  description:
    "Begin your journey with our YouTube Downloader—review our Terms of Use to optimize your experience with easy-to-use video downloading tools.",
};

function TermsOfService() {
  return (
    <>
      <CustomHead
        description={metadata.description || ""}
        pageUrl="https://youtube-downloaders.com/terms-of-use/"
        title={metadata.title?.toString() ?? ""}
      />
      <Layout>
        <section className={styles.parent}>
          <h1>Terms of Service</h1>
          <p>
            Last Updated: <strong>December 10, 2023</strong>
          </p>
          <h2>Acceptance of Terms</h2>
          <p>
            Hey there! Welcome to YouTube Downloaders, brought to you by{" "}
            <strong>Bytestechsol</strong>. Using our website or services means
            you&apos;re cool with following the rules. If these rules don&apos;t
            work for you, it&apos;s best to stay away from our website.
          </p>
          <h2>Use of Our Services</h2>
          <div className={styles.services}>
            <h3>Eligibility</h3>
            <p>
              Just a heads up, you&apos;ve got to be at least 10 years old to
              hop on board with our services. By using them, you&apos;re
              assuring us that you meet the eligibility requirements.
            </p>
            <h3>Account Registration</h3>
            <p>
              To get the full scoop on our services, you might need to create an
              account. Your secret code is to keep that account info under
              wraps, and give us a shout ASAP if there&apos;s any funny business
              going on.
            </p>
            <h3>User Content</h3>
            <p>
              If you&apos;re sharing content with us at YouTube Downloaders,
              like using fancy keywords related to content types, you&apos;re
              basically saying it&apos;s cool for us to use, tweak, and share
              that content worldwide without paying you. Fair deal?
            </p>
            <h3>Intellectual Property</h3>
            <p>
              All the cool stuff like text, graphics, logos, and software on
              YouTube Downloaders belongs to <strong>Bytestechsol</strong>.
              It&apos;s protected by the law, so don&apos;t go borrowing it
              without asking nicely.
            </p>
            <h3>Limitations of Liability</h3>
            <p>
              We try to give you the most accurate and current information, but
              there&apos;s no promise. Using our services is your own choice and
              responsibility.
            </p>
            <h3>Termination</h3>
            <p>
              We keep the right to kick you out or hit pause on your account and
              access to our services without a heads-up, especially if
              you&apos;re not playing by these Terms of Service.
            </p>
            <h3>Governing Law</h3>
            <p>
              These Terms of Service follow the rules of the land in your
              jurisdiction. If there are any tiffs about these terms, the courts
              in your jurisdiction have the final say.
            </p>
            <h3>Changes to Terms</h3>
            <p>
              Now and then, we might make our Terms of Service better or tweak
              them without telling you first. Just check the date up top. If
              you&apos;re still using our stuff after we&apos;ve made changes,
              it means you&apos;re cool with the new rules.
            </p>

            <h3>Contact Us</h3>
            <p>
              Got questions or worries about our Terms of Service? Send us an
              email at <strong>bytestechsol@gmail.com.</strong> We&apos;re all
              ears!
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default TermsOfService;
