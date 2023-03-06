import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'


const Chart = (props) => {
    const dataPointsValues =props.dataPoints.map(dataPoint => dataPoint.value )
         // we have changed the data points object  to number stored in data Point value 
    const totalMaximum =Math.max(...dataPointsValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} />)}
        </div>
    )
}

export default Chart