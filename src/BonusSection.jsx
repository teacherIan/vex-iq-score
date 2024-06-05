export { useState } from 'react';
import './index.css';
import Bonus from './Bonus.jsx';

export default function BonusSection(props) {
  return (
    <div className="bonusSection">
      Bonus
      <Bonus
        reds={true}
        redsKnockedOver={props.redsKnockedOver}
        setRedsKnockedOver={props.setRedsKnockedOver}
        text={'Knock Over Bonus'}
      />
      <Bonus
        reds={false}
        pt={props.siloOne}
        setPt={props.setSiloOne}
        text={'Silo I Fill Bonus'}
      />
      <Bonus
        reds={false}
        pt={props.siloTwo}
        setPt={props.setSiloTwo}
        text={'Silo II Fill Bonus'}
      />
      <Bonus
        reds={false}
        pt={props.siloThree}
        setPt={props.setSiloThree}
        text={'Silo III Fill Bonus'}
      />
      <Bonus
        reds={false}
        pt={props.parked}
        setPt={props.setParked}
        text={'Parked Bonus'}
      />
    </div>
  );
}
