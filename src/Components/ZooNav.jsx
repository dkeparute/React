function ZooNav() {

    return(
        <div className='zoo__nav'>
         <div className='zoo__nav__filter'>
             <span>Amimal filter by type: </span>
         <select >
              <option value="">Select animal </option>
          </select>
         </div>
        </div>
    );
}
export default ZooNav;