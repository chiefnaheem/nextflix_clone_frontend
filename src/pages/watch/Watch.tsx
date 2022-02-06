import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    </div>
  );
}