import HomePage from "@/components/Home/HomePage";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";
export const metadata: Metadata = {
  title: 'Youtube Shorts Downloader',
}
function YoutubeShorts() {
  return (
    <>
      <HomePage title="Youtube Shorts Downloader" isShort={true} />
    </>
  );
}

export default YoutubeShorts;
