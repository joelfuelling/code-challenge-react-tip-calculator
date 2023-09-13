
export default function Bill({children, bill, onSetBill}) {

    return (
        <>
        <div>
        <h1>{children}
            <input type="text" value={bill} onChange={e => onSetBill(Number(e.target.value))} placeholder='Enter bill amount...'></input>
            {bill}
        </h1>
        </div>
        </>
    )
}