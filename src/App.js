import Bill from './components/bill';
import Percent from './components/percent';
import Output from './components/output';
import Reset from './components/reset';
import { useState } from 'react';

function App(onClick) {
  const [tip, setTip] = useState(0)
  const [bill, setBill] = useState('')
  return (
    <div className="App">
      <Bill bill={bill}/>
      <Percent tip={tip}/>
      <Percent tip={tip}/>
      <Output />
      <Reset setTip={setTip} setBill={setBill} onClick={onClick}/>
    </div>
  );
}

export default App;
