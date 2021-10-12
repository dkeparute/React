function Box({ls, boxColor, boxNumber}) {

    return (

        <div className="black-box">
            <span style={{ letterSpacing: ls, color: boxColor}}>This is the Black Box number: {boxNumber.number}</span>

        </div >

    )
}
export default Box;