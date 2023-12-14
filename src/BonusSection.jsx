export { useState } from 'react';
import './index.css';
import Bonus from './Bonus.jsx';

export default function BonusSection(props) {
  function handleReds() {
    console.log('Clicked');
  }

  return (
    <div className="bonusSection">
      <Bonus
        pt={props.redsKnockedOver}
        setPt={props.setRedsKnockedOver}
        text={'Knocked Over Reds?'}
      />
      <Bonus pt={props.siloOne} setPt={props.setSiloOne} text={'Silo I'} />
      <Bonus pt={props.siloTwo} setPt={props.setSiloTwo} text={'Silo II'} />
      <Bonus
        pt={props.siloThree}
        setPt={props.setSiloThree}
        text={'Silo III'}
      />
    </div>
  );
}
