function ZooMessage({msg, showMsg}) {
    return (
        <div className='message' style = {{height: showMsg? '100px': '0px' }}>
            <span>{msg}</span>
        </div>
    );
}
export default ZooMessage;