import HomePage from "@/components/Home/HomePage";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Youtube Video Downloader',
  description:"Experience the remarkable power of Youtube to mp4 conversion with our free converter. Say goodbye to buffering and enjoy high-quality videos wherever you want.",
}
function YoutubeToMp4() {
  return <HomePage title="Youtube Video Downloader"/>;
}

export default YoutubeToMp4;
