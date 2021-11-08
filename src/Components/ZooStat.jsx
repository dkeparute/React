function ZooStat({ stats }) {

    return (
        <div className='stats'>
            <div className='stat'>
                <span>Animals count: <i>{stats.count}</i> </span>
                <span>Animals weight: <i>{stats.weight.toFixed(2)}</i> </span>
                <span>Animals average weight: <i>{stats.average.toPrecision(5)}</i></span>
            </div>

        </div>
    );
}
export default ZooStat;