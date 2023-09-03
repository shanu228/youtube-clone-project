import React from "react";

const commentsData = [
  {
    name: "Shanu",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Shanu",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Shanu",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "Shanu",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Shanu",
            text: "Lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Shanu",
                text: "Lorem ipsum dolor sit amet",
                replies: [
                  {
                    name: "Shanu",
                    text: "Lorem ipsum dolor sit amet",
                    replies: [
                      {
                        name: "Shanu",
                        text: "Lorem ipsum dolor sit amet",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Shanu",
                    text: "Lorem ipsum dolor sit amet",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Shanu",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "Shanu",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Shanu",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Shanu",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        // Don't use indexes as keys
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
              {/* <Comment key={index} data={comment} />
              <Comment key={index} data={comment} />
              <Comment key={index} data={comment} /> */}
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
