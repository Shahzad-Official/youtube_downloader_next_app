import HomePage from "@/components/Home/HomePage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Youtube Video Downloader - Youtube Downloader',
  description:"Experience the remarkable power of Youtube to mp4 conversion with our free converter. Say goodbye to buffering and enjoy high-quality videos wherever you want.",
}

function YoutubeToMp4() {
  var intro=`Download YouTube shorts for free using our downloader. Your search ends here. You can download free YouTube shorts in many different formats. YouTube continues to evolve, and this is especially true with "shorts." YouTube has a feature that's just for these videos. They are super-popular. The tool allows you to download YouTube shorts for offline viewing. This free tool is an invaluable resource for teachers and students. It shows that Internet issues do not stop the learning process. Our YouTube Shorts Downloader is perfect for anyone who loves to learn, teach, or simply enjoy uninterrupted YouTube. Why? It's completely free!.`;
  return <HomePage title="Youtube Video Downloader" intro={intro}/>;
}

export default YoutubeToMp4;
