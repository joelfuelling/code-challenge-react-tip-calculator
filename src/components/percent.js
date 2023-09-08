import {useState} from 'react'

export default function Percent() {
    const [tip, setTip] = useState(0)

    function handleTipAmount(e) {
        const newTip = e.target.value
        setTip(newTip)
    }
    return (
        <>
        <h1>What percent tip would you like to leave?
            <select type="text" value={tip} placeholder="Tip %" onChange={handleTipAmount}>
                <option value={''}></option>
                <option value={5}>5%</option>
                <option value={10}>10%</option>
                <option value={15}>15%</option>
                <option value={20}>20%</option>
                <option value={25}>25%</option>
            </select>
        </h1>
        </>
    )
}