import { Metadata } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
export const metadata: Metadata = {
  title: "Youtube Shorts Downloader",
  description:
    "Maximize YouTube Shorts with our pro downloader. Instantly download trending videos, stay ahead, and captivate your audience like never before.",
};

const HomePage = dynamic(() => import("@/components/Home/HomePage"));
function YoutubeShorts() {
  var intro = `Download YouTube shorts for free using our downloader. Your search ends here. You can download free YouTube shorts in many different formats. YouTube continues to evolve, and this is especially true with "shorts." YouTube has a feature that's just for these videos. They are super-popular. The tool allows you to download YouTube shorts for offline viewing. This free tool is an invaluable resource for teachers and students. It shows that Internet issues do not stop the learning process. Our YouTube Shorts Downloader is perfect for anyone who loves to learn, teach, or simply enjoy uninterrupted YouTube. Why? It's completely free!.`;
  return (
    <>
      <HomePage
        title="Youtube Shorts Downloader"
        isShort={true}
        intro={intro}
      />
    </>
  );
}

export default YoutubeShorts;
