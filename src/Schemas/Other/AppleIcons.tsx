"use client";
import React from "react";
import { Helmet } from "react-helmet";

function AppleIcons() {
  return (
    <div>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://youtube-downloaders.com/apple-touch-icon-120x120-precomposed.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://youtube-downloaders.com/apple-touch-icon-152x152-precomposed.png"
        />
      </Helmet>
    </div>
  );
}

export default AppleIcons;
