import CustomHead from "@/Schemas/Other/CustomOgHead";
import HomePage from "@/components/Home/HomePage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Youtube Video Downloader",
  description:
    "Experience the remarkable power of Youtube to mp4 conversion with our free converter. Say goodbye to buffering and enjoy high-quality videos wherever you want.",
};

function YoutubeToMp4() {
  var introText = `Welcome to our YouTube to MP4 converter - your gateway to a seamless video experience! Bid farewell to buffering and connectivity issues as we introduce a user-friendly platform designed to download and convert YouTube videos to the versatile MP4 format. Embrace the convenience of our website, allowing you to effortlessly transform your favourite YouTube content into high-quality MP4 files. Whether you're building a personal collection or seeking offline access across multiple devices, our YouTube to MP4 converter is your ultimate solution. Welcome to the world of limitless video enjoyment - where your favourite content is just a click away in the format of your choice!`;
  return (
    <>
      <CustomHead
        description={metadata.description || ""}
        pageUrl="https://youtube-downloaders.com/youtube-to-mp4/"
        title={metadata.title?.toString() ?? ""}
      />
      <HomePage title="Youtube Video Downloader" intro={introText} />
    </>
  );
}

export default YoutubeToMp4;
