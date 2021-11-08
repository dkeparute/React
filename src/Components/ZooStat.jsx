function ZooStat({ stats, GroupStats }) {

    return (
        <div className='stats'>
            <div className='stat'>
                <span>Animals count: <i>{stats.count}</i> </span>
                <span>Animals weight: <i>{stats.weight.toFixed(2)}</i> </span>
                <span>Animals average weight: <i>{stats.average.toPrecision(5)}</i></span>
            </div>
            <div className='gstat'>
                {
                    GroupStats.map(s => <span key={s.type}><i>{s.type}: </i><b>{s.count}</b></span>)
                }
            </div>

        </div>
    );
}
export default ZooStat;