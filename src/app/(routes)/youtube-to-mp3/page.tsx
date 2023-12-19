import CustomHead from "@/Schemas/Other/CustomOgHead";
import HomePage from "@/components/Home/HomePage";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Youtube Mp3 Downloader",
  description:
    "Discover the best MP3 downloader for Youtube. Unlock a world of music with just a few clicks. Don't wait any longer - take advantage of this amazing opportunity.",
};

function YoutubeToMp3() {
  var intro = `Introducing Our YouTube Video Converter: Effortlessly transform your favorite YouTube videos into MP3 files with our user-friendly and efficient converter. Enjoy the convenience of offline audio playback on various devices. Dive into the world of seamless conversion with our tool, exploring its popularity, legal considerations, and the impact it has on content creators and users. Join us as we unravel the benefits, challenges, and ethical dimensions of using Our YouTube to MP3 converter in today's digital landscape.`;
  return (
    <>
      <CustomHead
        description={metadata.description || ""}
        pageUrl="https://youtube-downloaders.com/youtube-to-mp3/"
        title={metadata.title?.toString() ?? ""}
      />
      <HomePage isMp3 title="Youtube Audio Downloader" intro={intro} />{" "}
    </>
  );
}

export default YoutubeToMp3;
