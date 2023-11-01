import React from 'react'

const VideoPlayer = ({trailers}) => {
  return (
    <iframe
        src={`${trailers}`}
        className="w-[400px] h-[480px] 2xl:w-[1000px] 2xl:h-[800px] md:w-[700px] rounded-3xl"
      >
      </iframe>
  )
}

export default VideoPlayer