import HomePage from "@/components/Home/HomePage";
import FAQsSchema from "@/components/Schemas/FAQsSchema";
import OrgnizationSchema from "@/components/Schemas/OrgnizationSchema";

export default function Home() {
  return (
    <>
    <FAQsSchema/>
    <OrgnizationSchema/>
      <HomePage />
    </>
  );
}
