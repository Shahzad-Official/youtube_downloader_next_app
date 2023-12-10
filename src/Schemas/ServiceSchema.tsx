import React from "react";
import Helmet from "react-helmet";

export default function ServiceSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "YouTube Video Downloader",
          description:
            "Unlock a world of free entertainment and knowledge with our YouTube downloader. Download videos, shorts, and audio effortlessly in various resolutions.",
          provider: {
            "@type": "Organization",
            name: "YouTube Downloaders",
          },
          offers: [
            {
              "@type": "Offer",
              name: "High-Quality Downloads",
              description:
                "Get the best videos ever! Pick from different formats like MP3, MP4, 3GP, and in various resolutions. Download shorts directly from YouTube links on our site.",
              price: "Free",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2023-01-01",
            },
            {
              "@type": "Offer",
              name: "Enhanced Security",
              description:
                "Your safety matters. Our downloader is a safe choice, providing enhanced security for a worry-free download experience. Trust in our YouTube downloader.",
              price: "Free",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2023-01-01",
            },
            {
              "@type": "Offer",
              name: "Unlimited YouTube Downloads",
              description:
                "Break free and download as many YouTube videos as you want. Enjoy endless entertainment with our YouTube downloader free.",
              price: "Free",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2023-01-01",
            },
            {
              "@type": "Offer",
              name: "Works Everywhere",
              description:
                "Feel unrestricted to experiment with this tool across a spectrum of devices—whether they be Windows, Linux, Android, or iOS. This tool seamlessly aligns itself as a splendid companion to an array of browsers, including but not limited to Chrome, Firefox, Safari, Opera, and beyond!",
              price: "Free",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2023-01-01",
            },
            {
              "@type": "Offer",
              name: "Mobile-Friendly",
              description:
                "Download videos on the go! Get videos on the move! Our mobile-friendly tool lets you download videos anytime, anywhere. It's super easy to use and makes downloading videos on your mobile a piece of cake.",
              price: "Free",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2023-01-01",
            },
            {
              "@type": "Offer",
              name: "YouTube Video Converter",
              description:
                "Save time with our speedy video conversion. Experience quicker downloads without compromising quality. Benefit from our YouTube video downloader MP4 for fast video conversion.",
              price: "Free",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2023-01-01",
            },
          ],
        })}
      </script>
    </Helmet>
  );
}
