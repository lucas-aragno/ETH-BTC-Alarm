import { Chart } from 'chart.js'

const loadCharts = ({data, id, labels}) => {
  let ctx = document.getElementById('lineChart').getContext('2d')
  let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStroke.addColorStop(0, '#80b6f4');
  gradientStroke.addColorStop(1, '#f49080');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['17:00', '17:05', '17:10', '17:15'],
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
          data: [100, 120, 150, 170]
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
              fontStyle: 'bold',
              beginAtZero: true,
              maxTicksLimit: 5,
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