import {
  TbRosetteNumber1,
  TbRosetteNumber2,
  TbRosetteNumber3,
} from "react-icons/tb";
import { RiAwardFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { FiAward } from "react-icons/fi";


import "./css/rank-topic.css";

export function RankTopic({ rank }) {
  switch (rank) {
    case 1:
      return (
        <div className="rank-topic">
          <FaAward />
          <TbRosetteNumber1 />
        </div>
      );
      break;
    case 2:
      return (
        <div className="rank-topic">
          <RiAwardFill />
          <TbRosetteNumber2 />
        </div>
      );
      break;
    case 3:
      return (
        <div className="rank-topic">
          <FiAward />
          <TbRosetteNumber3 />
        </div>
      );
      break;
    default:
      return <div className="rank-topic">Fuera de ranking</div>;
      break;
  }
}
