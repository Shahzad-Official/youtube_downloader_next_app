import FAQsSchema from "@/Schemas/FAQsSchema";
import HowToSchema from "@/Schemas/HowToSchema";
import OrgnizationSchema from "@/Schemas/OrgnizationSchema";
import AppleIcons from "@/Schemas/Other/AppleIcons";
import ServiceSchema from "@/Schemas/ServiceSchema";
import dynamic from "next/dynamic";

const HomePage=dynamic(()=>import("@/components/Home/HomePage"));

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
