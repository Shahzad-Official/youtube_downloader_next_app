import React from 'react'
import ContactUs from './ContactUs'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us - Youtube Downloader",
  description:
    "Get in touch with us for any questions or support regarding our YouTube Downloader. Contact our dedicated team to ensure a seamless experience in downloading and enjoying your favourite videos offline. Your feedback matters, and we're here to assist you on your journey with our user-friendly tools.",
};

function ContactUsPage() {
  return (
    <div><ContactUs/></div>
  )
}

export default ContactUsPage