function Box(props) {

    return (

        <div className="black-box">
            <span style={{ letterSpacing: props.ls, color: props.boxColor, fontSize: '10px' }}>This is the Black Box number: {props.boxNumber.number}</span>

        </div >

    )
}
export default Box;