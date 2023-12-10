'use client';
import React from "react";
import Helmet from "react-helmet";

function FAQsSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is a YouTube Video Downloader?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A YouTube Video Downloader is a tool to download videos from YouTube, enabling users to watch videos, shorts, and audio offline. Our comprehensive online YouTube video downloader offers features like downloading shorts and accessing high-quality 4K videos.",
              },
            },
            {
              "@type": "Question",
              name: "Is it free to download YouTube videos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our service allows you to freely download YouTube videos without any cost. Enjoy our free YouTube video downloader with features to download YouTube shorts, MP4, 3GP, and WEBM videos, and convert YouTube to MP3 without any limitations.",
              },
            },
            {
              "@type": "Question",
              name: "Can I Convert YouTube Videos to MP3 and MP4?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Certainly, you can effortlessly achieve that using our downloader. Copy the video link, paste it into our tool, and select your favored MP3 format. Explore a range of choices, such as high-quality MP3, OGG, and M4A, with bitrates spanning from 320kbps to 64kbps.",
              },
            },
            {
              "@type": "Question",
              name: "Is the downloader compatible with iOS and Android?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our downloader seamlessly operates on both iOS and Android gadgets. Whether you have an iPhone, iPad, or Android device, you can easily use our tool to download and enjoy your favorite videos offline.",
              },
            },
            {
              "@type": "Question",
              name: "Where does the system save downloaded YouTube videos or shorts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Locate your downloaded videos seamlessly by checking the 'Downloads' folder on your phone and desktop or go to the 'Download history' section in your browser.",
              },
            },
            {
              "@type": "Question",
              name: "Is there a maximum device limit for using this tool?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, there's no limit. You can use our 'YouTube Downloader' on various devices using a single account. Switching between iOS and Android is smooth and trouble-free. Download and enjoy your preferred content seamlessly across all your devices.",
              },
            },
            {
              "@type": "Question",
              name: "Does this YouTube downloader have a limit of age?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, there isn't a specific age limit to use our tool. It's open to users of all ages.",
              },
            },
            {
              "@type": "Question",
              name: "How much storage space do I need to download videos with the YouTube Video Downloader?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The storage space required depends on the size and quality of the videos you download. Ensure your device has sufficient space to accommodate the downloaded content.",
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
}

export default FAQsSchema;
