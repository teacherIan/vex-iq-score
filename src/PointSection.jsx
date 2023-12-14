import './index.css';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6';

export default function PointSection(props) {
  return (
    <div className="pointSection">
      <img className="img" src={props.img}></img>
      <div className="innerContainer">
        <FaCaretUp
          onClick={() => props.setScore(props.colorValue + 1)}
          className="increase"
        />
        {props.colorValue}
        <FaCaretDown
          onClick={() => props.setScore(props.colorValue - 1)}
          className="decrease"
        />
      </div>
    </div>
  );
}
