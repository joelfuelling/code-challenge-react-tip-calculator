import Bill from './components/bill';
import Percent from './components/percent';
import Output from './components/output';
import Reset from './components/reset';
import { useState } from 'react';

function App ({setTip}) {
  const [bill, setBill] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  const yourBill = bill / 2
  const yourTotal = Number((yourBill + ((yourBill * percentage1) /100)))
  const totalWithTip = Number(bill + (bill * (((percentage1 + percentage2)/ 2 ) /100))).toFixed(2)

  function handleReset() {
    setBill('')
    setPercentage1(0)
    setPercentage2(0)
}

  return (
    <>
    <div className="App">
      <Bill bill={bill} onSetBill={setBill}>How much was the bill?</Bill>
      <Percent percentage={percentage1} onSelect={setPercentage1}>How did you like the service?</Percent>
      <Percent percentage={percentage2} onSelect={setPercentage2}>How did your friend like the service?</Percent>
      {/* Only Render the Output and Reset component if the bill, and both percents are truthy. */}
      {
      (bill > 0 && percentage1 && percentage2) &&
      <>
      <Output bill={bill} percentage1={percentage1} percentage2={percentage2} totalWithTip={totalWithTip} yourTotal={yourTotal}/>
      <Reset onReset={handleReset}/>
      </>
      }

    </div>
    </>
  );
}

export default App;
