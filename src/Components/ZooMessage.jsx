function ZooMessage({msg}) {
    return (
        <div className='message' style = {{height: msg? '100px': '0px' }}>
            <span>{msg}</span>
        </div>
    );
}
export default ZooMessage;