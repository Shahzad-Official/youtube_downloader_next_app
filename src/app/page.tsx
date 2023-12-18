import FAQsSchema from "@/Schemas/FAQsSchema";
import HowToSchema from "@/Schemas/HowToSchema";
import OrgnizationSchema from "@/Schemas/OrgnizationSchema";
import AppleIcons from "@/Schemas/Other/AppleIcons";
import ServiceSchema from "@/Schemas/ServiceSchema";
import HomePage from "@/components/Home/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <AppleIcons/>
      <FAQsSchema />
      <OrgnizationSchema />
      <HowToSchema />
      <ServiceSchema />
      <HomePage />
    </>
  );
}
