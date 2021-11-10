import Child from "./Child";

function Pa({messageToChild}) {


    return (
      <div className='pa'>
          <h1>Pa</h1>
          <Child messageToChild={messageToChild} />
      </div>
    );

}
export default Pa;