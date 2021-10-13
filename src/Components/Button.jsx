
function Button({buttonText, backgroundColor}) {

    return(
        <div className="button-design">
            <button className="button" style={{ backgroundColor: backgroundColor}}>{buttonText}</button>
        </div>
    );
}
export default Button;