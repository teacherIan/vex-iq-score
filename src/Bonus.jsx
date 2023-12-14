import './index.css';

export default function Bonus(props) {
  function handleClick() {
    props.setPt(!props.pt);
  }
  return (
    <div className="bonus">
      <label className="label">{props.text}</label>
      <input onClick={handleClick} className="checkBox" type="checkbox" />
    </div>
  );
}
