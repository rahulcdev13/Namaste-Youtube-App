import React from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const CommentList = ({ commentListData }) => {
  const { name, text, reply } = commentListData;

  return (
    <>
      {commentListData.map((commnetData) => {
        return (
          <>
            <div className="flex">
              <img
                className="h-8 col-span-1"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="user-logo"
              />
              <div className="px-3 mb-5">
                <p className="font-bold">{commnetData.name}</p>
                <p>{commnetData.text}</p>
                <p className="flex text-25 mt-2">
                  {" "}
                  <FiThumbsUp className="mx-2 mr-3 mt-1" />
                  652
                  <FiThumbsDown className="mx-2 mr-3 ml-3 mt-2" />
                  25
                  <span className="ml-5"> Reply</span>
                </p>
                <p>{commnetData.reply}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CommentList;
