"use client";
import React, { useEffect, useState } from "react";
import styles from "./DownloadButton.module.css";
import downloadFile from "@/utils/AppUtils";
import { PulseLoader } from "react-spinners";
import AppColors from "@/utils/AppColors";
import useDownloader, { jsDownload } from "react-use-downloader";

function DownloadButton({
  url,
  fileName,
  isMp3 = false,
}: {
  url: string;
  fileName: string;
  isMp3?: boolean;
}) {
  const [isDownload, setDownload] = useState(!isMp3);
  const [isLoading, setLoading] = useState(false);
  async function handleDownload() {
    setLoading(true);
    try {
      if (isMp3===true) {
        setDownload(false);
      } else {
        setDownload(true);
        await downloadFile(url, fileName, isMp3);
      }
    } catch (err) {
      console.log("download error => " + err);
      setLoading(false);
    }

    setLoading(false);
  }
  return (
    <button
      className={styles.downloadbutton}
      onClick={
        isLoading || !isDownload
          ? () => {
              console.log("not touched");
            }
          : handleDownload
      }
    >
      {isLoading ? (
        <PulseLoader color={AppColors.backgroundColor} />
      ) : isDownload ? (
        "Download"
      ) : (
        <a href={url} target="_blank">
          Open
        </a>
      )}
    </button>
  );
}

export default DownloadButton;
