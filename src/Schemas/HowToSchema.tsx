"use client";
import React from "react";
import Helmet from "react-helmet";

function HowToSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Download Videos with YouTube Downloader",
          totalTime: "PT5M",
          supply: "Internet connection, Device (Computer or Smartphone)",
          tool: "YouTube Video Downloader",
          step: [
            {
              "@type": "HowToStep",
              name: "Copy and Paste the Video URL",
              text: "Begin by locating the YouTube video you desire. Copy the web link (URL) and paste it into the provided box on our website.",
              url: "https://youtube-downloaders.com/",
              image: [
                "https://youtube-downloaders.com/youtube_downloader_0.png",
                "https://youtube-downloaders.com/youtube_downloader_1.png",
              ],
            },
            {
              "@type": "HowToStep",
              name: "Preview the Video",
              text: "Click the 'Download' button to ensure it's the correct video. Choose Video Quality: 360p, 720p, or select MP3, MP4, WebM, or 3GP as your preferred format.",
              url: "https://youtube-downloaders.com/",
              image: "https://youtube-downloaders.com/youtube_downloader_2.png",
            },
            {
              "@type": "HowToStep",
              name: "Download the Video",
              text: "Satisfied with the preview? Pick MP3, MP4, WebM, or 3GP and click 'Download' to begin. After the download, enjoy watching the video in offline mode.",
              url: "https://youtube-downloaders.com/",
              image: "https://youtube-downloaders.com/youtube_downloader_3.png",
            },
          ],
        })}
      </script>
    </Helmet>
  );
}

export default HowToSchema;
