import React from 'react';
import styles from "./faq.module.css";
import Layout from '@/components/Layout/Layout';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ's - Youtube Downloader",
};
function FAQs() {
    const faqs = [
        {
          heading: "What is a YouTube Video Downloader?",
          description:
            "A YouTube Video Downloader is a tool to download videos from YouTube, a helpful tool enabling users to watch videos, shorts, and audio offline. With our comprehensive online YouTube video downloader, you get a variety of features, from downloading shorts to accessing high-quality 4K videos, shorts, and more.",
        },
        {
          heading: "Is it free to download YouTube videos?",
          description:
            "Yes, our service allows you to freely download YouTube videos without any cost. Enjoy our free YouTube video downloader with features to download YouTube shorts, MP4, 3GP, and WEBM videos, and convert YouTube to MP3 without any limitations.",
        },
        {
          heading: "Can I Convert YouTube Videos to MP3 and MP4?",
          description:
            "You can effortlessly achieve that using our downloader. Copy the video link, then paste it into our tool, and select your favoured MP3 format. Explore a range of choices, such as high-quality MP3, OGG, and M4A, with bitrates spanning from 320kbps to 64kbps. It's simple and efficient for getting the audio or video format you prefer.",
        },
        {
          heading: "Is the downloader compatible with iOS and Android?",
          description:
            "Certainly, our downloader seamlessly operates on both iOS and Android gadgets. Whether you have an iPhone, iPad, or Android device, you can easily use our tool to download and enjoy your favourite videos offline.",
        },
        {
          heading:
            "Where does the system save downloaded YouTube videos or shorts?",
          description:
            "Locate your downloaded videos seamlessly by checking the 'Downloads' folder on your phone and desktop or go to the 'Download history' section in your browser.",
        },
        {
          heading: "Is there a maximum device limit for using this tool?",
          description:
            "No, there's no limit. You can use our 'Youtube Downloader' on various devices using a single account. Switching between iOS and Android is smooth and trouble-free. Download and enjoy your preferred content seamlessly across all your devices.",
        },
        {
          heading: "Does this YouTube downloader have a limit of age?",
          description:
            "No, there isn't a specific age limit to use our tool. It's open to users of all ages.",
        },
        {
          heading:
            "How much storage space do I need to download videos with the YouTube Video Downloader?",
          description:
            "The storage space required depends on the size and quality of the videos you download. Ensure your device has sufficient space to accommodate the downloaded content.",
        },
      ];
  return (
    <Layout>
    <section className={styles.parent}>
        <h2>Frequently Asked Questions (FAQ&apos;s)</h2>
        {faqs.map((item, index) => {
          return (
            <div key={index} className={styles.faqPoint}>
              <h3>
                {index + 1} . {item.heading}
              </h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </section>
      </Layout>
  )
}

export default FAQs