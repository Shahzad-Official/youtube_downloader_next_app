import FAQsSchema from "@/Schemas/FAQsSchema";
import HowToSchema from "@/Schemas/HowToSchema";
import OrgnizationSchema from "@/Schemas/OrgnizationSchema";
import AppleIcons from "@/Schemas/Other/AppleIcons";
import CustomHead from "@/Schemas/Other/CustomOgHead";
import ServiceSchema from "@/Schemas/ServiceSchema";
import HomePage from "@/components/Home/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <CustomHead
        description="Explore our site for the top YouTube downloader! Download videos, convert to MP3, and enjoy hassle-free content on our user-friendly platform!"
        pageUrl="https://youtube-downloaders.com/"
        title="Youtube Downloader"
      />
      <AppleIcons />
      <FAQsSchema />
      <OrgnizationSchema />
      <HowToSchema />
      <ServiceSchema />
      <HomePage />
    </>
  );
}
