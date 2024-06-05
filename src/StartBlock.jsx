import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function StartBlock(props) {
  const [timer, setTimer] = useState(120);
  const [started, setStarted] = useState(false);
  const [startSpring, startAPI] = useSpring(() => ({
    from: { top: '-100%' },
    to: { top: '50%' },
  }));

  const [timeSpring, timeAPI] = useSpring(() => ({
    from: { top: '-100%', left: '25%' },
  }));

  const [scoreSpring, scoreAPI] = useSpring(() => ({
    from: { top: '-100%', left: '75%' },
  }));

  const [offset, setOffset] = useState('  ');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0 && started) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timer, started]);

  const formattedTime = new Date(timer * 1000)
    .toLocaleTimeString('en-US', {
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    .replace(/^0/, '');

  function handleClick() {
    if (!started) {
      startAPI.start({
        from: {
          top: '50%',
        },
        to: {
          top: '200%',
        },
      });

      timeAPI.start({
        from: {
          top: '-100%',
        },
        to: {
          top: '50%',
        },
      });
      scoreAPI.start({
        from: {
          top: '-100%',
        },
        to: {
          top: '50%',
        },
      });
    }
    setStarted(true);
  }

  return (
    <div className="startBlock">
      <animated.div
        onClick={handleClick}
        className="viewScore"
        style={{
          ...scoreSpring,
        }}
      >
        SCORE:
        <br />
        {props.total}
      </animated.div>
      <animated.div
        onClick={handleClick}
        style={{
          ...startSpring,
        }}
        className="startText"
      >
        START
      </animated.div>
      <animated.div
        onClick={handleClick}
        style={{
          ...timeSpring,
        }}
        className="startText"
      >
        TIME:
        <br />
        {formattedTime}
      </animated.div>
    </div>
  );
}
