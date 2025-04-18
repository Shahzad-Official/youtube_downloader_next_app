"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { DrawerButton } from "../Drawer/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFileAudio,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import useHeader from "@/hooks/useHeader";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const { changeIndex } = useHeader();

  const items = [
    {
      href: "/youtube-shorts-downloader",
      name: "Youtube Shorts",
      icon: <FontAwesomeIcon icon={faBolt} />,
    },
    {
      href: "/youtube-to-mp4",
      name: "YouTube To Mp4",
      icon: <FontAwesomeIcon icon={faVideo} />,
    },
    {
      href: "/youtube-to-mp3",
      name: "YouTube To Mp3",
      icon: <FontAwesomeIcon icon={faFileAudio} />,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<string | null>("-1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedIndex: string | null;
      if (location.pathname === "/") {
        changeIndex(-1);
      } else if (location.pathname === items[0].href) {
        changeIndex(0);
      } else if (location.pathname === items[1].href) {
        changeIndex(1);
      } else if (location.pathname === items[2].href) {
        changeIndex(2);
      } else if (location.pathname === "/about") {
        changeIndex(3);
      } else if (location.pathname === "/contact") {
        changeIndex(4);
      }else{
        changeIndex(111);
      }
      storedIndex = localStorage.getItem("currentIndex");
      setCurrentIndex(storedIndex);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.parent}>
      <div className={styles.insideDiv}>
        <Link
          href={"/"}
          replace
          className={styles.logo}
          onClick={() => {
            router.refresh();
            changeIndex(-1);
          }}
        >
          Youtube Downloader
        </Link>
        <DrawerButton />
        <div className={styles.actions}>
          {items.map((item, index) => {
            return (
              <Link
                href={item.href}
                replace
                className={`${
                  index.toString() === currentIndex ? styles.activeLink : ""
                } ${styles.link}`}
                key={index}
                onClick={() => {
                  changeIndex(index);
                }}
              >
                &nbsp;
                {item.icon}
                &nbsp; {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
