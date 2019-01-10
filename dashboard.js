import { abc } from './data3';
// console.log('this is abce ',abc);
// import data from './data';
// window.onload = function() {
//   alert("hello!");
// }
// function onLoad () {
  document.querySelector(".tripStatusCard .date").innerHTML = getTripCompletedDate();
  document.querySelector(".billStatusCard .date").innerHTML = getValidityDate();
// }
// console.log('hi')
function getTripCompletedDate(){
  return "25 Aug, 2018 at 3:45 PM";
}
function getValidityDate () {
  return "25 Dec, 2018 at 3:45 PM";
}

var labels = [] ;
lineData.forEach(e=>labels.push(moment(e.t)));
// var label2 = [] ;
// lineData2.forEach(e=>labels2.push(moment(e.t)));
var ctx = document.getElementById('chart1').getContext('2d');
// var ctx2 = document.getElementById('chart2').getContext('2d');
ctx.canvas.width = 900;
ctx.canvas.height = 300;

var color = Chart.helpers.color;
var cfg = {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Shree Tempo',
      backgroundColor: 'rgb(0, 136, 255)',
      borderColor: 'rgb(0, 136, 255)',
      data: lineData,
      type: 'line',
      pointRadius: 0,
      fill: false,
      lineTension: 0,
      borderWidth: 4
    },
    {
      label: 'Jyoti Tempo',
      backgroundColor: 'rgb(216, 216, 216)',
      borderColor: 'rgb(216, 216, 216)',
      data: lineData2,
      type: 'line',
      pointRadius: 0,
      fill: false,
      lineTension: 0,
      borderWidth: 4
    }
  ]
  },
  options: {
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'series',
        ticks: {
          source: 'labels'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Closing price ($)'
        }
      }]
    }
  }
};
var chart = new Chart(ctx, cfg);

// var data2= [{
//   x: new Date(),
//   y: 1
// }, {
//   t: new Date(),
//   y: 10
// }];

// var chart2 = new Chart(ctx2, {
//   type: 'line',
//   data: data2,
//   options: {
//       scales: {
//           xAxes: [{
//               type: 'time',
//               distribution: 'series'
//           }]
//       }
//   }
// })