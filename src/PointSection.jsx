import './index.css';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6';
import { useSpring, animated } from '@react-spring/web';

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
          onClick={() =>
            props.colorValue > 0 ? props.setScore(props.colorValue - 1) : null
          }
          className="decrease"
        />
      </div>
    </div>
  );
}
