import React, {useState} from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  TimeScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import './styles.css'
import TimeSelect from '../SelectTime/TimeSelect'


ChartJs.register(
  Tooltip,
  Legend,
  TimeScale,
  LinearScale,
  BarElement,
  CategoryScale,
);


const Summary = () => {
  const [selectCategory, setSelectCategory] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const labelArray = ['2023-09-10','2023-09-11','2023-09-12','2023-09-13','2023-09-14','2023-09-15','2023-09-16']


  const data = {
    labels: labelArray,
    datasets: [{
      label: 'Daily Changes',
      data: [90000, 40000, 65000, 25000, 85000, 50000, 85000],
      backgroundColor: '#5570F1',
      barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
    }]
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        }
      },
      y:{
        beginAtZero: false
      }
    }
  }




  return (
    <div className='dsum-container'>
      <div className='dsum-paper'>
        <div className='dsum-header'>
          <div className='dsum-h-left'>
            <h1>Summary</h1>
            <div className='dsum-h-time'> 
                <div className='dsum-ht-paper'>
                    <p>Sales</p>
                    <button onClick={() => setSelectCategory(!selectCategory)}>
                        {selectCategory ? <IoIosArrowUp className='dsum-ht-logo' /> : <IoIosArrowDown className='dsum-ht-logo' />}
                    </button>
                </div>
                {selectCategory && (
                    <div className='dsum-ht-dropdown'>
                        <button>Orders</button>
                        <button>Customers</button>
                    </div>
                )}
            </div>
          </div>
          <div className='dsum-h-right'>
              <TimeSelect showTime={showTime} setShowTime={setShowTime} />
          </div>
        </div>
        <div className='dsum-body'>
            <Bar 
              data={data}
              options={options}
            />
        </div>
      </div>
    </div>
  )
}

export default Summary