import {useState} from 'react'

export default function Bill() {
    const [bill, setBill] = useState('')

    function handleBillChange(e) {
        const newBill = e.target.value
        setBill(newBill)
    }
    return (
        <>
        <div>
        <h1>How much was the bill?
            <input type="text" value={bill} onChange={handleBillChange} placeholder='Enter bill amount...'></input>
        </h1>
        </div>
        </>
    )
}