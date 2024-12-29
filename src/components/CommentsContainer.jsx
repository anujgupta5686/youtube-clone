import React, { useState } from "react";
import { Button } from "./ui/button";
const commentsData = [
  {
    name: "Anuj",
    text: "Hello dear How are you?",
    replies: [{ name: "Anuj", text: "Hello dear How are you?", replies: [] }],
  },
  {
    name: "Aman",
    text: "Hello dear How are you?",
    replies: [{ name: "Anuj", text: "Hello dear How are you?", replies: [] }],
  },
  {
    name: "Neeraj",
    text: "Hello dear How are you?",
    replies: [
      {
        name: "Anuj",
        text: "Hello dear How are you?",
        replies: [
          {
            name: "Anuj",
            text: "Hello dear How are you?",
            replies: [
              {
                name: "Anuj",
                text: "Hello dear How are you?",
                replies: [
                  { name: "Anuj", text: "Hello dear How are you?", replies: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Divyanshu",
    text: "Hello dear How are you?",
    replies: [{ name: "Anuj", text: "Hello dear How are you?", replies: [] }],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <>
      <div className="flex gap-2 items-center shadow-sm bg-slate-100 p-2 rounded-md my-2">
        <img
          className="w-12 h-12"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user"
        />
        <div className="px-3 font-bold">
          <h1>{name}</h1>
          <h1>{text}</h1>
        </div>
      </div>
    </>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  const [comments, setComments] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  const handleCommentSubmit = () => {
    if (comments.trim()) {
      console.log("Submitted Comment:", comments);
      setComments("");
    }
    setShowBtn(false);
  };

  const handleCancel = () => {
    setComments("");
    setShowBtn(false);
  };

  const handleBlur = () => {
    if (!comments.trim()) {
      setShowBtn(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-md text-slate-900">Comments</h1>
      <div className="flex sm:flex-nowrap flex-wrap gap-2">
        {/* <input
          type="text"
          placeholder="Comment..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full py-2 px-2 rounded-md outline-none hover:outline-none border border-slate-300"
          onFocus={() => setShowBtn(true)}
          onBlur={handleBlur}
        /> */}
        {/* {showBtn && (
          <>
            <Button
              variant="destructive"
              className="border"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button className="border" onClick={handleCommentSubmit}>
              Comment
            </Button>
          </>
        )} */}
      </div>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
