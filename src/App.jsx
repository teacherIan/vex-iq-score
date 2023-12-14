import { useState, useEffect } from 'react';
import './index.css';
import PointSection from './PointSection';
import StartBlock from './StartBlock';
import greenBlock from './assets/green.png';
import purpleBlock from './assets/purple.png';
import redBlock from './assets/red.png';
import BonusSection from './BonusSection';

export default function App() {
  const [green, setGreen] = useState(0);
  const [red, setRed] = useState(0);
  const [purple, setPurple] = useState(0);
  const [total, setTotal] = useState(0);
  const [redsKnockedOver, setRedsKnockedOver] = useState(false);
  const [siloOne, setSiloOne] = useState(false);
  const [siloTwo, setSiloTwo] = useState(false);
  const [siloThree, setSiloThree] = useState(false);

  useEffect(() => {
    let bonus = 0;
    if (redsKnockedOver) bonus += 10;
    if (siloOne) bonus += 10;
    if (siloTwo) bonus += 10;
    if (siloThree) bonus += 10;

    setTotal(red * 7 + green * 3 + purple * 5 + bonus);
  }, [green, red, purple, redsKnockedOver, siloOne, siloTwo, siloThree]);

  return (
    <>
      <div className="container">
        <StartBlock />
        <PointSection img={greenBlock} colorValue={green} setScore={setGreen} />
        <PointSection img={redBlock} colorValue={red} setScore={setRed} />
        <PointSection
          img={purpleBlock}
          colorValue={purple}
          setScore={setPurple}
        />

        <BonusSection
          setRedsKnockedOver={setRedsKnockedOver}
          redsKnockedOver={redsKnockedOver}
          setSiloOne={setSiloOne}
          siloOne={siloOne}
          siloTwo={siloTwo}
          siloThree={siloThree}
          setSiloTwo={setSiloTwo}
          setSiloThree={setSiloThree}
        />
      </div>

      <div className="viewScore">{total}</div>
    </>
  );
}
