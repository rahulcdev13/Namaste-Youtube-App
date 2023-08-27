import React from "react";
// import CommentList from "./CommentList";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const arrComment = [
  {
    name: "Rahul chavan",
    text: "namaste rract project very good",
    reply: [
      {
        name: "Samat chavan",
        text: "namaste rract project very good",
        reply: [],
      },
      {
        name: "Kishor chavan",
        text: "namaste rract project very good",
        reply: [],
      },
      {
        name: "Harshdeep chavan",
        text: "namaste rract project very good",
        reply: [],
      },
    ],
  },
  {
    name: "Suresh chavan",
    text: "namaste rract project very good",
    reply: [
      {
        name: "Rahul chavan",
        text: "namaste rract project very good",
        reply: [
          {
            name: "Rahul chavan",
            text: "namaste rract project very good",
            reply: [
              {
                name: "Rahul chavan",
                text: "namaste rract project very good",
                reply: [
                  {
                    name: "Rahul chavan",
                    text: "namaste rract project very good",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nilesh chavan",
    text: "namaste rract project very good",
    reply: [
      {
        name: "Rahul chavan",
        text: "namaste rract project very good",
        reply: [
          {
            name: "Rahul chavan",
            text: "namaste rract project very good",
            reply: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  console.log(data);
  // const { name, text, reply } = data;
  return (
    <>
      <div className="flex">
        <img
          className="h-8 col-span-1"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-logo"
        />
        <div className="px-3 mb-5">
          <p className="font-bold">{data.name}</p>
          <p>{data.text}</p>
          <p className="flex text-25 mt-2">
            {" "}
            <FiThumbsUp className="mx-2 mr-3 mt-1" />
            652
            <FiThumbsDown className="mx-2 mr-3 ml-3 mt-2" />
            25
            <span className="ml-5"> Reply</span>
          </p>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ comments }) => {
  return (
    <>
      {/* Desclaimer : Please use key as a index */}
      {comments.map((comment, index) => {
        return (
          <>
            <div className="p-2">
              <Comment key={index} data={comment} />
              <div className="pl-5 border border-l-gray ml-5">
                <CommentList comments={comment.reply} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-1 m-1 w-2/3">
      <CommentList comments={arrComment} />
    </div>
  );
};

export default CommentsContainer;
