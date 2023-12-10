import HomePage from "@/components/Home/HomePage";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Youtube Mp3 Downloader',
}
function YoutubeToMp3() {
  return  <HomePage isMp3 title="Youtube Audio Downloader"/>;
 
}

export default YoutubeToMp3;
