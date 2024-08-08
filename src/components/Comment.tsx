"use client";

import { CommentProps } from "@/libs/types";
import { comments } from "@/libs/comments";

export default function Comment({userImagePath , username, commentText, likeNum, replies,}: CommentProps) 
{
  
  {/* You can use map-loop to render Reply component here */}
  return (
  
    <div className="d-flex gap-2 my-2">
          <img
            src= {userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>commentText</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likeNum} คน</span>
            </div>
          </div>
          {comments.map((Comm) => (
            <Comm 
            userImagePath={userImagePath}
            username={username}
            likeNum={likeNum}
            replies={replies}
            />
          ))}
  </div>
  );
}

/* <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">999 คน</span>
            </div>
          </div>
</div> */