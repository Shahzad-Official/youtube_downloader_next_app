import FAQsSchema from "@/Schemas/FAQsSchema";
import OrgnizationSchema from "@/Schemas/OrgnizationSchema";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <>
    <FAQsSchema/>
    <OrgnizationSchema/>
      <HomePage />
    </>
  );
}
