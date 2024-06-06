import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import AddToDB from './AddToDB';

export default function StartBlock(props) {
  const [inputValue, setInputValue] = useState('');
  const [showEnd, setShowEnd] = useState(false);
  const [timer, setTimer] = useState(5);
  const [started, setStarted] = useState(false);
  const [startSpring, startAPI] = useSpring(() => ({
    from: { top: '-100%' },
    to: { top: '50%' },
    config: {
      tension: 180,
      friction: 20,
      mass: 2,
    },
  }));

  const [timeSpring, timeAPI] = useSpring(() => ({
    from: { top: '-100%', left: '20%' },
    config: {
      tension: 180,
      friction: 20,
      mass: 3,
    },
  }));

  const [scoreSpring, scoreAPI] = useSpring(() => ({
    from: { top: '-100%', left: '80%' },
    config: {
      tension: 180,
      friction: 20,
      mass: 3,
    },
  }));

  const [nameSpring, nameAPI] = useSpring(() => ({
    from: { top: '-200%', left: '20%' },
    config: {
      tension: 180,
      friction: 20,
      mass: 3,
    },
  }));

  const [saveSpring, saveAPI] = useSpring(() => ({
    from: { top: '-200%', left: '50%' },
    config: {
      tension: 180,
      friction: 20,
      mass: 3,
    },
  }));

  function updateInputValue(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0 && started) {
        setTimer(timer - 1);
      }
      if (timer == 0) {
        console.log('Timeout');
        timeAPI.start({
          from: {
            top: '50%',
          },
          to: {
            top: '200%',
          },
        });
        nameAPI.start({
          from: {
            top: '-200%',
          },
          to: {
            top: '50%',
          },
        });
        saveAPI.start({
          from: {
            top: '-200%',
          },
          to: {
            top: '50%',
          },
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timer, started]);

  function saveData() {
    setShowEnd(true);
  }

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
      <animated.div
        style={{
          ...nameSpring,
        }}
        className="input"
      >
        <label className="textLabel">
          NAME:
          <br />
          <input type="text" name="yourInputName" onChange={updateInputValue} />
        </label>
      </animated.div>
      <animated.div
        style={{
          ...saveSpring,
        }}
        className="store"
        onClick={() => saveData()}
      >
        SAVE
      </animated.div>
      {showEnd ? <AddToDB name={inputValue} total={props.total} /> : null}
    </div>
  );
}
