import FAQsSchema from "@/Schemas/FAQsSchema";
import HowToSchema from "@/Schemas/HowToSchema";
import OrgnizationSchema from "@/Schemas/OrgnizationSchema";
import ServiceSchema from "@/Schemas/ServiceSchema";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <>
    <FAQsSchema/>
    <OrgnizationSchema/>
    <HowToSchema/>
    <ServiceSchema/>
      <HomePage />
    </>
  );
}
