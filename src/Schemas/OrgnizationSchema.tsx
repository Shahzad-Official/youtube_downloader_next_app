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
          sameAs: [
            "https://twitter.com/YourTwitterHandle",
            "https://www.facebook.com/YourFacebookPage",
            "https://www.linkedin.com/in/yourlinkedinprofile",
          ],
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://youtube-downloaders.com",
          name: "YouTube Downloaders",
          description:
            "Unlock a world of free entertainment and knowledge with our YouTube downloader.",
        })}
      </script>
    </Helmet>
  );
}

export default OrgnizationSchema;
