export default function AddToDB(props) {
  return (
    <>
      <div className="addedToDB">
        <div className="dbText">Awesome Job {props.name}!</div>

        <div className="dbText">You Scored {props.total} points</div>
      </div>
      ;
    </>
  );
}
