import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import ContactUs from "./ContactUs";
import CustomHead from "@/Schemas/Other/CustomOgHead";
export const metadata: Metadata = {
  title: "Contact Us - Youtube Downloader",
  description:
    "Questions about our YouTube Downloader? Reach out for friendly support, ensuring a smooth experience downloading and enjoying videos offline. Your feedback matters!",
};
function ContactUsPage() {
  return (
    <div>
      <CustomHead
        description={metadata.description || ""}
        pageUrl="https://youtube-downloaders.com/contact/"
        title={metadata.title?.toString() ?? ""}
      />
      <ContactUs />
    </div>
  );
}

export default ContactUsPage;
