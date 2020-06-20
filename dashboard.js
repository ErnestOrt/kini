/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          1
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#81F79F',
        borderWidth: 4,
        pointBackgroundColor: '#81F79F'
      },
      {
              data: [
                720
              ],
              lineTension: 0,
              backgroundColor: 'transparent',
              borderColor: '#F78181',
              borderWidth: 4,
              pointBackgroundColor: '#F78181'
            },
            {
                          data: [
                            2.4
                          ],
                          lineTension: 0,
                          backgroundColor: 'transparent',
                          borderColor: '#007bff',
                          borderWidth: 4,
                          pointBackgroundColor: '#007bff'
                        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
