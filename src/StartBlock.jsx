import { collection, addDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import AddToDB from './AddToDB';
import { db } from './DB';

export default function StartBlock(props) {
  const [firstUse, setFirstUse] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showEnd, setShowEnd] = useState(false);
  const [timer, setTimer] = useState(120);
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
    if (!firstUse) {
      saveAPI.start({
        from: {
          top: '-200%',
        },
        to: {
          top: '50%',
        },
      });
    }
    setFirstUse(true);
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
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timer, started]);

  async function saveData() {
    try {
      const docRef = await addDoc(collection(db, 'testCollection'), {
        name: inputValue,
        total: props.total,
      });
      console.log('Document written with ID: ', docRef.id);
      setShowEnd(true);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
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
