import Script from "next/script";
import React from "react";
import Helmet from "react-helmet";

export default function GTM() {
  return (
    <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZKGYZD6BHP"></Script>
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZKGYZD6BHP');
      `}
    </Script>
  </>
  )}