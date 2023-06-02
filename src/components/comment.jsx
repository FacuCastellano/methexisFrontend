import { RiThumbUpLine,RiThumbDownLine } from "react-icons/ri";
import {MdOutlineEmojiObjects,MdEmojiObjects} from 'react-icons/md'
import "./css/comment.css";
export function Comment({ userName, comment }) {
  return (
    <div className="comment-container">
      <div className="user-info">
        <img src={"https://robohash.org/" + userName +"?set=set4"} alt="User Img" />
        <p>{userName}</p>
      </div>
      <div className="comment-text">
        <p>{comment}</p>
      </div>
      <div className="comment-buttons-container">
        <RiThumbUpLine className="icon-reaction-comment" />
        <RiThumbDownLine className="icon-reaction-comment"/>
        <MdOutlineEmojiObjects className="icon-reaction-comment"/>
        <MdEmojiObjects className="icon-reaction-comment"/>
      </div>
    </div>
  );
}
