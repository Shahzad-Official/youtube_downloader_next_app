import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import ContactUs from "./ContactUs";
export const metadata: Metadata = {
  title: "Contact Us - Youtube Downloader",
  description:
    "Questions about our YouTube Downloader? Reach out for friendly support, ensuring a smooth experience downloading and enjoying videos offline. Your feedback matters!",
};
// const ContactUs = dynamic(() => import("./ContactUs"));
function ContactUsPage() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}

export default ContactUsPage;
