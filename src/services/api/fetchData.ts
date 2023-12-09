import { YoutubeModel } from "../models/YoutubeModel";


export default async function fetchData({
  url,
  isMp3 = false,
}: {
  url: string;
  isMp3?: boolean;
}) {
  try {
    const response = await fetch("https://api.youtube-downloaders.com/api/yt", {
      cache:"no-cache",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        isMp3: isMp3,
      }),
    });

    const data = await response.json();
    return data;
    
  } catch (err) {
    console.log(err);
  }
}
