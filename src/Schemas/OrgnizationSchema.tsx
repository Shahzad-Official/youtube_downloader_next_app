"use client";
import React from "react";
import Helmet from "react-helmet";

function OrgnizationSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "YouTube Downloaders",
          url: "https://youtube-downloaders.com",
          logo: "https://youtube-downloaders.com/logo.png",
          description:
            "Unlock a world of free entertainment and knowledge with our YouTube downloader. Download videos, shorts, and audio effortlessly in various resolutions.",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+923081888686",
              contactType: "customer support",
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main City",
            addressLocality: "Multan",
            addressRegion: "Punjab",
            postalCode: "60000",
            addressCountry: "Pakistan",
          },
        })}
      </script>
    </Helmet>
  );
}

export default OrgnizationSchema;
