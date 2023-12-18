import HomePage from "@/components/Home/HomePage";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Youtube Mp3 Downloader',
  description:"Discover the best MP3 downloader for Youtube. Unlock a world of music with just a few clicks. Don't wait any longer - take advantage of this amazing opportunity.",
}
function YoutubeToMp3() {
  return  <HomePage isMp3 title="Youtube Audio Downloader"/>;
 
}

export default YoutubeToMp3;
