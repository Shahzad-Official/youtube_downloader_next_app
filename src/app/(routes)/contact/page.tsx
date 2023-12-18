import React from 'react'
import ContactUs from './ContactUs'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us - Youtube Downloader",
  description:
    "Questions about our YouTube Downloader? Reach out for friendly support, ensuring a smooth experience downloading and enjoying videos offline. Your feedback matters!",
};

function ContactUsPage() {
  return (
    <div><ContactUs/></div>
  )
}

export default ContactUsPage