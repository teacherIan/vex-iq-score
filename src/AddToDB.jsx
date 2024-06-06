import { useSpring, animated } from '@react-spring/web';

export default function AddToDB(props) {
  const [startSpring, startAPI] = useSpring(() => ({
    from: { width: '0', height: '0', borderRadius: '1000px' },
    to: { width: '100svw', height: '100svh', borderRadius: '0px' },
    config: {
      tension: 180,
      friction: 20,
      mass: 1,
    },
  }));

  return (
    <>
      <animated.div
        style={{
          ...startSpring,
        }}
        className="addedToDB"
      >
        <div className="dbText">Awesome Job {props.name}!</div>

        <div className="dbText">You Scored {props.total} points</div>
      </animated.div>
    </>
  );
}
