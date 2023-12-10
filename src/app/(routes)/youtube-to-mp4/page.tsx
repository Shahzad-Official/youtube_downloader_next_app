import HomePage from "@/components/Home/HomePage";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Youtube Video Downloader',
}
function YoutubeToMp4() {
  return <HomePage title="Youtube Video Downloader"/>;
}

export default YoutubeToMp4;
