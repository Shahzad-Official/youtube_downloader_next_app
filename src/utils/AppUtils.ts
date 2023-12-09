

export default async function downloadFile(url: string, fileName: string,isMp3:boolean) {

  
  const response = await fetch(`https://api.youtube-downloaders.com/api/proxy`, {
    method:"post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: url,
      fileName:fileName,
    }),
  });
  const blob = await response.blob();
  const newUrl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = newUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
