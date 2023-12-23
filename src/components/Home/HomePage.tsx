"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPaste,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import fetchData from "@/services/api/fetchData";
import { YoutubeModel } from "@/services/models/YoutubeModel";
import Image from "next/image";
import { HashLoader, PulseLoader } from "react-spinners";
import AppColors from "@/utils/AppColors";
import DownloadButton from "./DownloadButton/DownloadButton";
import { toast } from "react-toastify";
import Articles from "./Articles/Articles";
import dynamic from "next/dynamic";
import Layout from "../Layout/Layout";
interface HomeProps {
  isMp3?: boolean;
  isShort?: boolean;
  title?: string;
  children?: ReactNode;
  intro?: string;
}
function HomePage({
  isMp3 = false,
  title = "Youtube Downloader",
  isShort = false,
  children,
  intro,
}: HomeProps) {
  const [data, setData] = useState<YoutubeModel | undefined | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(event.currentTarget.value);
  }
  const inputRef = useRef<HTMLInputElement>(null);
  async function pasteData() {
    inputRef.current?.focus();
    const clipboardData = await navigator.clipboard.readText();
    setInputVal(clipboardData);
  }

  async function handleStart() {
    setLoading(true);
    if (inputVal.trim() === "") {
      toast("Please paste your link!", {
        position: "top-center",
        type: "error",
      });
    } else if (inputVal.trim().includes("index")) {
      toast("Playlist video is not allowed!", {
        position: "top-center",
        type: "error",
      });
    } else if (isShort && !inputVal.trim().includes("short")) {
      toast("The current link is not a short video link!", {
        position: "top-center",
        type: "error",
      });
    } else if (inputVal.trim().includes("yout")) {
      try {
        const responseData: YoutubeModel | any = await fetchData({
          url: inputVal,
          isMp3: isMp3,
        });
        setData(responseData);
        setLoading(false);
        
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    } else {
      console.log(inputVal);
      toast("Please enter correct youtube url!", {
        position: "top-center",
        type: "error",
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    setData(data);
  }, [data]);

useEffect(()=>{
  if (data?.hasError) {
    toast(data?.message, {
      position: "top-center",
      type: "error",
    });
  }
},[data?.hasError, data?.message]);

  return (
    <Layout>
      <div className={styles.parent}>
        <div className={styles.home}>
          <span className="mt-5" />
          <h1 className={styles.h1}>{title}</h1>
          <div className={styles.searchSection}>
            <div className={styles.searchArea}>
              <div className={styles.inputArea}>
                <input
                  ref={inputRef}
                  id="input"
                  value={inputVal}
                  className={styles.input}
                  type="text"
                  autoFocus
                  onChange={handleInputChange}
                />
                <FontAwesomeIcon
                  onClick={pasteData}
                  className={styles.pasteIcon}
                  icon={faPaste}
                />
              </div>
            </div>
            <div className={` ${isLoading ? styles.button : ""}`}>
              {isLoading ? (
                <PulseLoader color={AppColors.backgroundColor} />
              ) : (
                <button
                  onClick={handleStart}
                  className={` ${styles.button}`}
                  type="submit"
                >
                  Start &nbsp;
                  <FontAwesomeIcon
                    className={styles.arrowIcon}
                    icon={faArrowRight}
                    size={"sm"}
                  />
                </button>
              )}
            </div>
          </div>

          {data == null || data === undefined || data.hasError ? (
            <div />
          ) : isLoading ? (
            <HashLoader color={AppColors.primaryColor} />
          ) : (
            <div className={styles.downloadOptions}>
              <div className={styles.imageArea}>
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  className={styles.image}
                  src={data.thumbnail}
                  alt="Youtube Video Thumbnail"
                />
                <h4 className={styles.title}>{data.title}</h4>
              </div>
              <div className={styles.optionsArea}>
                <table className={styles.myTable}>
                  <thead>
                    <tr>
                      <th>Quality</th>
                      <th>FileSize</th>
                      {isMp3 ? null : <th>Preview</th>}
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data === null || data === undefined || data.hasError ? (
                      <div />
                    ) : (
                      data.formats.map((value, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              (.{value.extension}) &nbsp;{value.quality} &nbsp;
                              {isMp3 || value.hasAudio ? (
                                <span />
                              ) : (
                                <FontAwesomeIcon
                                  color={AppColors.primaryColor}
                                  icon={faVolumeXmark}
                                />
                              )}
                            </td>
                            <td>{value.fileSize} mb</td>
                            {isMp3 ? null : (
                              <td>
                                {" "}
                                <DownloadButton
                                  fileName={`${data.videoId}.${value.extension}`}
                                  url={value.url}
                                  isMp3
                                />
                              </td>
                            )}

                            <td>
                              <DownloadButton
                                url={value.url}
                                fileName={`${data.videoId}.${value.extension}`}
                                isMp3={isMp3}
                              />
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <span className="mt-5" />
        </div>
        {children}
        <Articles intro={intro} title={title} />
      </div>
    </Layout>
  );
}

export default HomePage;
