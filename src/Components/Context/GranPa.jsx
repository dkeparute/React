import Pa from "./Pa";

function GranPa({messageToChild}) {


    return (
      <div className='granpa'>
          <h1>Gran Pa</h1>
          <Pa messageToChild={messageToChild} />
      </div>
    );

}
export default GranPa;