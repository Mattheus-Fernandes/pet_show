import "./VideoBg.css"

const VideoBg = () => {
  return (
    <div className="videoBg">
      <div>
        <div className="overlay"></div>
        <video src="bg_video.mp4" autoPlay loop muted></video>
      </div>
    </div>
  )
}

export default VideoBg