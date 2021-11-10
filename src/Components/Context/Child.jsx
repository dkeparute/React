function Child({messageToChild}) {


    return (
      <div className='child'>
          <h1>Child</h1>
          <h2>Got: {messageToChild}</h2>
      </div>
    );

}
export default Child;