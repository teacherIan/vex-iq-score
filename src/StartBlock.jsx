import { useState, useEffect } from 'react';

export default function StartBlock() {
  const [timer, setTimer] = useState(120);
  const [started, setStarted] = useState(false);

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
    console.log('Clicked');
    setStarted(true);
  }

  return (
    <div className="startBlock">
      <div onClick={handleClick} className="startText">
        {started ? formattedTime : 'Start'}
      </div>
    </div>
  );
}
