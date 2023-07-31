import React, {useState} from 'react'
import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import './styles.css'
import TimeSelect from '../SelectTime/TimeSelect'


ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
);



const Marketting = () => {
  const data = {
    labels: ['Acquisition', 'Retention', 'Purchase'],
    datasets: [{
      label: 'Poll',
      data: [55, 30, 15],
      backgroundColor: ['#5570F1', '#FFCC91', '#97A5EB',],
      borderColor: ['#5570F1', '#FFCC91', '#97A5EB',],
    }]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true
        }
    }
    }
  }


  const [showTime, setShowTime] = useState(false)
  return (
    <div className='dmar-container'>
      <div className='dmar-paper'>
        <div className='dmar-header'>
          <h2>Marketing</h2>
          <TimeSelect showTime={showTime} setShowTime={setShowTime} />
        </div>
        <div className='dmar-body'>
          <Doughnut 
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  )
}

export default Marketting