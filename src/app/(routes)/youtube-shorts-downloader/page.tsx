import HomePage from "@/components/Home/HomePage";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";
export const metadata: Metadata = {
  title: 'Youtube Shorts Downloader - Youtube Downloader',
  description:"Make the most of YouTube Shorts with our professional downloader. Download trending and popular videos instantly. Stay ahead of the competition and captivate your audience like never before.",
}
function YoutubeShorts() {
  return (
    <>
      <HomePage title="Youtube Shorts Downloader" isShort={true} />
    </>
  );
}

export default YoutubeShorts;
