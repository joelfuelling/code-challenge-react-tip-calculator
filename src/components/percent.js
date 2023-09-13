
export default function Percent({children, percentage, onSelect}) {
    return (
        <>
        <h1>
            <label>{children}</label>
            <select type="text" value={percentage} placeholder="Tip %" onChange={e => onSelect(Number(e.target.value))}>
                <option value={0}>0%</option>
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