function GroupAnimal({ fieldAnimal }) {
    // cia bus CONDITIONAL RENDERINGAS

    if ('cow' === fieldAnimal.animal) {
        return (
            <div className='cow'></div>

        );
    }
    else if ('sheep' === fieldAnimal.animal) {
        return (
            <div className='sheep'></div>

        );
    }
    else {
        // priesingu atveju nieko nerendinam, grazinam null
        return null;
    }


}
export default GroupAnimal;