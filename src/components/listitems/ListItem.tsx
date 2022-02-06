import "./listitem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type Movie = {
  duration: string;
  limit: string;
  year: number;
  desc: string;
  genre: string;
};

const ListItem = ({ item, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({} as Movie);
  // const trailer =
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
  useEffect(() => {
    const getMovie = async () => {
      try {
        const resData: any = axios.get(
          `https://my-nextflix-clone-app.herokuapp.com/api/v1/movies/find/${item}`,
          {
            headers: {
              token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmMxNTk3ZTFlNDJmMTcyZWZhZWQ2MyIsImlhdCI6MTY0MzkxMDU4MSwiZXhwIjoxNjQ0MTY5NzgxfQ.DNnF8zeo4vYSt7A-zxuSpS6qk4GmMWMxny-BsZR5PG4`,
            },
          }
        );
        console.log(resData.data.data);
        setMovie(resData.data.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);
  return (
    <div
      className="listItem"
      style={{ left: `${isHovered && index * 225 - 50 + index * 2.5}` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.img} alt="" />
      {isHovered && (
        <>
          <video src={item.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    // </Link>
  );
};

export default ListItem;
