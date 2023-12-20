import CustomHead from "@/Schemas/Other/CustomOgHead";
import HomePage from "@/components/Home/HomePage";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";
export const metadata: Metadata = {
  title: 'Youtube Shorts Downloader | Download youtube shorts free online ',
  description:"Maximize YouTube Shorts with our pro downloader. Instantly download trending videos, stay ahead, and captivate your audience like never before.",
}
function YoutubeShorts() {
  var intro=`Download YouTube shorts for free using our downloader. Your search ends here. You can download free YouTube shorts in many different formats. YouTube continues to evolve, and this is especially true with "shorts." YouTube has a feature that's just for these videos. They are super-popular. The tool allows you to download YouTube shorts for offline viewing. This free tool is an invaluable resource for teachers and students. It shows that Internet issues do not stop the learning process. Our YouTube Shorts Downloader is perfect for anyone who loves to learn, teach, or simply enjoy uninterrupted YouTube. Why? It's completely free!.`;
  return (
    <>
    <CustomHead description={metadata.description||""} pageUrl="https://youtube-downloaders.com/youtube-shorts-downloader/" title={metadata.title?.toString()??""}/>
      <HomePage title="Youtube Shorts Downloader" isShort={true} intro={intro}/>
    </>
  );
}

export default YoutubeShorts;
