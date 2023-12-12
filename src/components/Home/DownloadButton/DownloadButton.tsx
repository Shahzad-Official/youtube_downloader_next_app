"use client";
import React, { useState } from "react";
import styles from "./DownloadButton.module.css";
import LinearProgress from "@/components/LInearProgress";
import DownloadStore from "@/hooks/DownloadStore";

function DownloadButton({
  url,
  fileName,
  isMp3 = false,
}: {
  url: string;
  fileName: string;
  isMp3?: boolean;
}) {
  const { progress, setProgress } = DownloadStore();
  const [isDownload, setDownload] = useState(!isMp3);
  const [isLoading, setLoading] = useState(false);
  async function handleDownload() {
    setLoading(true);
    setProgress(0);
    try {
      if (isMp3 === true) {
        setDownload(false);
      } else {
        setDownload(true);
        const response = await fetch(
          `https://youtube-downloaders.com/api/proxy`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: url,
              fileName: fileName,
            }),
          }
        );

        const contentLength = +response.headers.get("Content-Length")!;
        const reader = response.body!.getReader();
        let receivedLength = 0;
        const downloadedChunks: Uint8Array[] = [];

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          receivedLength += value.length;
          const downloadProgress = Math.round(
            (receivedLength / contentLength) * 100
          );
          setProgress(downloadProgress);
          downloadedChunks.push(new Uint8Array(value));
        }

        const blob = new Blob(downloadedChunks, {
          type: response.headers.get("Content-Type")!,
        });

        const newUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = newUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.log("download error => " + err);
      setLoading(false);
    }

    setLoading(false);
  }
  return (
    <>
      {isLoading ? (
        <LinearProgress progress={progress} />
      ) : (
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
          {isDownload ? (
            "Download"
          ) : (
            <a href={url} target="_blank">
              Open
            </a>
          )}
        </button>
      )}
    </>
  );
}

export default DownloadButton;
