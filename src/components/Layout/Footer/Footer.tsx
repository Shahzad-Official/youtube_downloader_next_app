"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import useHeader from "@/hooks/useHeader";

function Footer() {
  const { changeIndex } = useHeader();
  return (
    <div className={styles.parent}>
      <div className={styles.copyText}>
        <p>
          CopyRight &copy; {new Date().getFullYear()} &nbsp;
          <Link href={"/"} replace className={styles.domainLink}>
            Youtube Downloader
          </Link>
        </p>

        <p className={styles.hide}>
          &nbsp; - &nbsp;your favorite youtube video converter
        </p>
      </div>
      <div className={styles.links}>
        <Link
          href={"/faqs"}
          onClick={() => {
            changeIndex(99);
          }}
          className={` ${styles.link}`}
          replace
        >
         FAQ&apos;s
        </Link>
        <Link
          href={"/terms-of-use"}
          onClick={() => {
            changeIndex(99);
          }}
          className={` ${styles.link}`}
          replace
        >
          Terms of Use
        </Link>
        <Link
          onClick={() => {
            changeIndex(100);
          }}
          href={"/privacy-policy"}
          className={` ${styles.link}`}
          replace
        >
          Privacy Policy
        </Link>
        <Link
          onClick={() => {
            changeIndex(3);
          }}
          href={"/about"}
          replace
          className={`${styles.link}`}
        >
          About
        </Link>
        <Link
          onClick={() => {
            changeIndex(4);
          }}
          href={"/contact"}
          replace
          className={`${styles.link}`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Footer;
