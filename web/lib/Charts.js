import { Chart } from 'chart.js'

const loadCharts = ({detail: {id, serialData}}) => {
  let ctx = document.getElementById(id).getContext('2d')
  let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStroke.addColorStop(0, '#80b6f4');
  gradientStroke.addColorStop(1, '#f49080');
  
  let labels = []
  let data = []

  serialData.forEach(dataPoint => {
    labels.push(dataPoint.y.time)
    data.push(dataPoint.x.data.USD)
  })
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Price (USD)',
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        fill: false,
        borderWidth: 2,
        data
      }]
    },
    options: {
      legend: {
        position: 'top'
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#3cf285',
            beginAtZero: true,
            maxTicksLimit: 5,
            fontStyle: 'bold',
            padding: 20
          },
          gridLines: {
            drawTicks: false,
            display: true
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: 'black',
            beginAtZero: true,
          }
        }]
      }
    }
  })
}

export { loadCharts }