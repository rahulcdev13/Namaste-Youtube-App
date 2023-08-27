import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_BYID } from "../contants/api_data";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  // console.log(searchParam.get("v"));
  const videoDetails = YOUTUBE_VIDEO_BYID + searchParam.get("v");

  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(videoDetails);
      const json = await data.json();
      // console.log(json.items);
      setVideoInfo(json.items);
    };
    getVideoInfo();
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="m-5">
      <iframe
        className="rounded-xl"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        {videoInfo.map((video) => {
          return (
            <>
              <div key={video.id}>
                <h1 className="font-bold text-xl m-2">
                  {video?.snippet?.title}
                </h1>
                <div className="flex">
                  {/* <button className="p-3 flex bg-gray-100 font-bold border border-gray-200 rounded-full mx-2 hover:bg-gray-400">
                    <FaUserTie />
                  </button> */}
                  <FaUserTie className="rounded-full mt-1 border border-gray-400 text-4xl" />
                  <ul>
                    <li className="font-bold text-gray-800 ml-2">
                      {video?.snippet?.channelTitle}
                    </li>
                    <li className=" text-sm ml-2">2.56M Subscriber</li>
                  </ul>
                  <ul className="flex">
                    <button className="bg-black text-white border border-gray-200 shadow-sm px-5 py-1 rounded-full m-2 mt-5 hover:bg-gray-300 ">
                      Subscriber
                    </button>
                    <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-l-full m-2 mt-5 hover:bg-gray-300 ">
                    <FiThumbsUp className="mx-2 text-xl" />
                    </button>
                    <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-r-full m-2 mt-5 hover:bg-gray-300 ">
                    <FiThumbsDown className="mx-3 text-xl" />
                    </button>
                    <button className=" flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 mt-5 hover:bg-gray-300 ">
                    <PiShareFat className="mx-2 text-xl" /> Share
                    </button>
                    <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 mt-5 hover:bg-gray-300 ">
                    <GoDownload className="mx-1 text-xl" /> Download
                    </button>
                    <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 mt-5 hover:bg-gray-300 ">
                    <BsThreeDots />
                    </button>
                  </ul>
                  {/* <button className="p-1 px-5 bg-black text-white font-bold text-sm border border-gray-200 rounded-full mx-5 mr-32">
                    Subscriber
                  </button> */}
                  {/* <button className="p-2 flex bg-gray-100 font-bold text-sm border border-gray-200 rounded-l-full ml-20 hover:bg-gray-400">
                    <FiThumbsUp className="mx-2 text-xl" />{" "}
                    {video?.statistics?.likeCount}
                  </button>
                  <button className="p-1 bg-gray-100 font-bold text-sm border border-gray-200 rounded-r-full hover:bg-gray-400">
                    <FiThumbsDown className="mx-3 text-xl" />
                  </button>
                  <button className="p-2 flex bg-gray-100 font-bold text-sm border border-gray-200 rounded-full mx-2 hover:bg-gray-400">
                    <PiShareFat className="mx-2 text-xl" /> Share
                  </button>
                  <button className="p-2 px-2 flex bg-gray-100 font-bold text-sm border border-gray-200 rounded-full mx-2 hover:bg-gray-400">
                    <GoDownload className="mx-1 text-xl" /> Download
                  </button> */}
                  {/* <button className='border border-gray-200 shadow-sm px-5 py-1 bg-gray-200 rounded-full m-2'><PiShareFat /> Share</button>  */}
                  {/* <button className="p-3 flex bg-gray-100 font-bold border border-gray-200 rounded-full mx-2 hover:bg-gray-400">
                    <BsThreeDots />
                  </button> */}
                </div>
              </div>
              <hr className="m-5 w-2/3"></hr>
              <div className=" w-2/3 m-2 rounded-lg bg-gray-100 p-2 ">
                <p className="font-bold">
                  {video?.statistics?.viewCount} Views{" "}
                  {video?.snippet?.publishedAt}{" "}
                </p>
                <p>{video?.snippet?.description}</p>
              </div>
              <hr className="m-5 w-2/3"></hr>
              <div>
                <h1 className="m-2 font-bold text-2xl">
                  {video?.statistics?.commentCount} Comments
                </h1>
              </div>
              <CommentsContainer />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Watchpage;
