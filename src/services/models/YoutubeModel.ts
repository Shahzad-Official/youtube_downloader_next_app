export interface YoutubeModel {
  hasError:boolean
  message:string
  videoId: string
  title: string
  thumbnail: string
  formats: Format[]
}

export interface Format {
  fileSize: number
  hasAudio: boolean
  extension: string
  quality: string
  url: string
}
