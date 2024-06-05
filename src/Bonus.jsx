import './index.css';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6';

export default function Bonus(props) {
  function handleClick() {
    props.setPt(!props.pt);
  }

  function handleButtonClick(e) {
    if (e == 'plus' && props.redsKnockedOver < 3)
      props.setRedsKnockedOver(props.redsKnockedOver + 1);
    if (e == 'minus' && props.redsKnockedOver > 0)
      props.setRedsKnockedOver(props.redsKnockedOver - 1);
  }
  return (
    <div className="bonus">
      <label className="label">{props.text}</label>
      <div>
        {props.reds ? (
          <div>
            <FaCaretUp
              className="increase"
              onClick={() => handleButtonClick('plus')}
            />
            {props.redsKnockedOver}
            <FaCaretDown
              className="decrease"
              onClick={() => handleButtonClick('minus')}
            />
          </div>
        ) : (
          <input onClick={handleClick} className="checkBox" type="checkbox" />
        )}
      </div>
    </div>
  );
}
