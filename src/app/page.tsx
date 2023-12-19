import CustomHead from "@/Schemas/Other/CustomOgHead";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    <>
      <CustomHead
        description="Explore our site for the top YouTube downloader! Download videos, convert to MP3, and enjoy hassle-free content on our user-friendly platform!"
        pageUrl="https://youtube-downloaders.com/"
        title="Youtube Downloader"
      />
      <HomePage />
    </>
  );
}
