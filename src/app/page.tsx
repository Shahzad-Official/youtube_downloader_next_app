import HomePage from "@/components/Home/HomePage";
import FAQsSchema from "@/Schemas/FAQsSchema";
import OrgnizationSchema from "@/Schemas/OrgnizationSchema";

export default function Home() {
  return (
    <>
    <FAQsSchema/>
    <OrgnizationSchema/>
      <HomePage />
    </>
  );
}
