import React from "react";
import styles from "./Articles.module.css";
import step1 from "../../../../public/youtube_downloader_1.png";
import step1_1 from "../../../../public/youtube_downloader_1_1.png";

import step2 from "../../../../public/youtube_downloader_2.png";
import step3 from "../../../../public/youtube_downloader_2.png";
import Image from "next/image";
import DownloadIcon from "@/svgIcons/DownloadIcon";
import SecurityIcon from "@/svgIcons/SecurityIcon";
import LaunchIcon from "@/svgIcons/LaunchIcon";
import InfinityIcon from "@/svgIcons/InfinityIcon";
import ConverterIcon from "@/svgIcons/ConverterIcon";
import MobileIcon from "@/svgIcons/MobileIcon";

function Articles() {
  const steps = [
    {
      subHeading: "Copy and Paste the Video URL",
      description:
        "Begin by locating the YouTube video you desire. Copy the web link (URL) and paste it into the provided box on our website.",
      image: step1,
    },
    {
      subHeading: "Preview the Video",
      description: `Click the "Download" button to ensure it's the correct video. Choose Video Quality:360p: Quick download, smaller file.720p: Crisp and clear for an excellent view. The video is available in several other quality options too. Need more choices? No worries! Select MP3, MP4, WebM, or 3GP as your preferred format.`,
      image: step2,
    },
    {
      subHeading: "Download the Video",
      description: `Satisfied with the preview? Fantastic! Now, pick MP3, MP4, WebM, or 3GP and click "Download" to begin. After the download, enjoy watching the video in offline mode. Feel free to explore our other features too!`,
      image: step3,
    },
  ];
  const keyFeatures = [
    {
      heading: "High-Quality Downloads",
      description:
        "Get the best videos ever! Our YouTube Downloader lets you pick from different formats like MP3, MP4, 3GP, and in various resolutions. You can also download shorts directly from YouTube links on our site.",
      icon: <DownloadIcon />,
    },
    {
      heading: "Enhanced Security",
      description:
        "Your safety matters. Our downloader is a safe choice, providing enhanced security for a worry-free download experience. Trust in our YouTube downloader.",
      icon: <SecurityIcon />,
    },
    {
      heading: "Unlimited YouTube Downloads",
      description:
        "Break free and download as many YouTube videos as you want. Enjoy endless entertainment with our YouTube downloader free.",
      icon: <InfinityIcon />,
    },
    {
      heading: "Works Everywhere",
      description:
        "Feel unrestricted to experiment with this tool across a spectrum of devices—whether they be Windows, Linux, Android, or iOS. This tool seamlessly aligns itself as a splendid companion to an array of browsers, including but not limited to Chrome, Firefox, Safari, Opera, and beyond!",
      icon: <LaunchIcon />,
    },
    {
      heading: "Mobile-Friendly",
      description: `Download videos on the go! "Get videos on the move! Our mobile-friendly tool lets you download videos anytime, anywhere. It's super easy to use and makes downloading videos on your mobile a piece of cake.`,
      icon: <MobileIcon />,
    },
    {
      heading: "YouTube Video Converter",
      description:
        "Save time with our speedy video conversion. Experience quicker downloads without compromising quality. Benefit from our YouTube video downloader MP4 for fast video conversion.",
      icon: <ConverterIcon />,
    },
  ];
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
    <div className={styles.parent}>
      <section>
        <h2>Best Online Youtube Downloader</h2>
        <p>
          Get videos, shorts, and audio for free with our YouTube downloader.
          You&apos;re in the right spot. We provide a wide range of services for
          downloading free YouTube videos, shorts, and various audio types in
          different resolutions. YouTube is evolving continuously, especially
          with the rise of &quot;shorts.&quot; They&apos;re super popular, and
          YouTube made a special feature just for them. This tool saves these
          YouTube videos and short videos for offline watching. For teachers and
          students, this free downloader is a big help, making it obvious that
          internet issues don&apos;t stop learning. If you love learning,
          teaching, or just enjoying uninterrupted YouTube time, YouTube video
          downloader is for you. Why? Because it&apos;s free to use!
        </p>
      </section>
      <section className={styles.howToDownload}>
        <h2>How To Download</h2>
        <div>
          {steps.map((step, index) => {
            return (
              <div key={index}>
                <h3>Step:&nbsp;{index + 1}</h3>
                <h4>{step.subHeading}</h4>
                <div className={styles.imageBox}>
                  {index === 0 ? (
                    <div className={styles.imageRow}>
                      <Image
                        className={styles.image}
                        src={step1_1}
                        alt={step.subHeading}
                      />
                      <Image
                        className={styles.image}
                        src={step.image}
                        alt={step.subHeading}
                      />
                    </div>
                  ) : (
                    <Image
                      className={styles.image}
                      src={step.image}
                      alt={step.subHeading}
                    />
                  )}
                </div>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h2>Key Features | YouTube Video Downloader</h2>
        {keyFeatures.map((item, index) => {
          return (
            <div key={index}>
              <h3>
                {item.icon} &nbsp;&nbsp; {item.heading}
              </h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>Frequently Asked Questions (FAQ&apos;s)</h2>
        {faqs.map((item, index) => {
          return (
            <div key={index}>
              <h3>
                {index + 1} . {item.heading}
              </h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Articles;
