import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import axios from 'axios';

Chart.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)

const BarGrapgh = () => {
    const [teamdeets,setTeamdeets] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/getTeamdata')
      .then((res)=>{
        setTeamdeets(res.data)
      })
    },[])

    const labels = teamdeets.map(team => team.TeamName)
    const active = teamdeets.map(team => team.Active)
    const completed = teamdeets.map(team => team.Completed)

    const data = {
      labels,
      datasets :[
      {
        label:"Active",
        data:active,
      },
      {
        label:"Completed",
        data:completed
      }
    ]
    }

    const options = {
      responsive: true,
      plugins : {
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          display: true,
          text: 'Team Data',
        }

      }
    }

  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default BarGrapgh