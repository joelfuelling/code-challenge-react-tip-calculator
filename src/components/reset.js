

export default function Reset({setTip, setBill}) {

    function handleReset() {
        setTip(0)
        setBill(null)
    }
    return(
        <>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}