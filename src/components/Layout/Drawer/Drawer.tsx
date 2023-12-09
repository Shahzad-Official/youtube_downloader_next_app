"use client";
import React, { useEffect, useState } from "react";
import styles from "./Drawer.module.css";
import useDrawerState from "../../../hooks/useDrawer";
import Link from "next/link";
import { Divide } from "hamburger-react";
import useHeader from "@/hooks/useHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFileAudio,
  faHome,
  faInfoCircle,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function Drawer() {
  const { isOpen, close, toggle } = useDrawerState();
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
    {
      href: "/about",
      name: "About",
      icon: <FontAwesomeIcon icon={faInfoCircle} />,
    },
    {
      href: "/contact",
      name: "Contact Us",
      icon: <FontAwesomeIcon icon={faPhone} />,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<string|null>("-1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedIndex = localStorage.getItem("currentIndex");
      setCurrentIndex(storedIndex );
    }
  }, []);
  return (
    <div
      className={`${isOpen ? styles.open : ""} ${styles.parent}`}
      onClick={close}
    >
      <div className={`${isOpen ? styles.open : ""} ${styles.drawer}`}>
        <div className={styles.list}>
          <div className="self-end">
            <Divide toggled={isOpen} onToggle={toggle} />
          </div>

          <Link
            className={`${currentIndex === "-1" ? styles.activeLink : ""} ${
              styles.link
            }`}
            href={"/"}
            onClick={() => {
              changeIndex(-1);
              close();
            }}
            replace
          >
            &nbsp;
            <FontAwesomeIcon icon={faHome} />
            &nbsp; Home
          </Link>
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

export default Drawer;
export function DrawerButton() {
  const { toggle, isOpen } = useDrawerState();
  return (
    <div className={styles.icon}>
      <Divide toggled={isOpen} onToggle={toggle} />
    </div>
  );
}
