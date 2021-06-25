import React from 'react'
import classes from './Chart.module.css'
import { Bar, Pie } from 'react-chartjs-2';

interface ChartProps {
    label: string
    type: 'line' | 'bar' | 'horizontalBar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'
}

const Chart = ({ label, type, ...rest }: ChartProps) => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Orange"],
        datasets: [
            {
                label: "# of votes",
                data: [12, 19, 2, 50, 5],
                backgroundColor: ['red', 'blue', "yellow", 'green', "orange"]
            }
        ]
    }

    return(
        <div className={classes.main}>
            <h3>{label}</h3>
            {type === "pie" && 
                <Pie
                    type={type} 
                    data={data} 
                    height={200} 
                    width={400}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            }
            {type === "bar" && 
                <Bar
                    type={type} 
                    data={data} 
                    height={100} 
                    width={700}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            }
        </div>
    )
}

export default Chart