"use client";
import { Helmet } from "react-helmet";

interface CustomHeadProps {
  title: string;
  description: string;
  pageUrl: string;
}

const CustomHead = ({ title, description, pageUrl }: CustomHeadProps) => (
  <Helmet>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content="https://youtube-downloaders.com/youtube-downloader.png"
    />
    <meta property="og:url" content={pageUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Youtube Downloader" />
  </Helmet>
);

export default CustomHead;
