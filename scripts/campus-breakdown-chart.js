google.charts.load('current', {
  'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(initCharts);

//set global default font
Chart.defaults.font.family = "'ReadexPro'"
Chart.defaults.font.size = 13;
Chart.defaults.plugins.title.font.size = 17;

const doughnutLabel = {
  id: 'doughnutLabel',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {ctx, data} = chart;

    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;

    const size = Math.round(chart.chartArea.width / 14); 
    
    let theSum = 0;
    for (var i = 0; i < data.datasets[0].data.length; i++)
      theSum += data.datasets[0].data[i];
    let finalString = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(theSum);


    ctx.font = 'bold ' + size + 'px ReadexPro';
    ctx.fillStyle = 'rgba(54, 162, 235, 1)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(finalString, xCoor, yCoor);
  }
}

function initCharts() {
//  createChart("2425uResChart", "https://docs.google.com/spreadsheets/d/1kccrFJIMqa07EfZEFPi4obVsTSS6wp-UuKxbihcfwvc/edit?usp=sharing");
//  createChart("2425uNonresChart", "https://docs.google.com/spreadsheets/d/1ES4vP4YhGP7g-A1MeS4kd4uujn5eoe6JzhfAC-a3Fek/edit#gid=0")
//  createChart("2425gResChart", "https://docs.google.com/spreadsheets/d/107BADicIfIDD6cJNeeZJnl6mAPkm6ncTnIyG5JeCbcU/edit#gid=0")
//  createChart("2425gNonresChart", "https://docs.google.com/spreadsheets/d/1IRg13R20UU_EglYtFXNfZdIKF2AFrqMopvKifFj-WgY/edit#gid=0")
  createChart("campus-based", "https://docs.google.com/spreadsheets/d/1uSIizLaGXsjTWf2UkdHySWs1s0G0xOrQMZvJxeNkeZ4/edit?usp=sharing")
}

function createChart(containerId, dataUrl) {
  var query = new google.visualization.Query(dataUrl);
  query.setQuery('select *');
  query.send(function(response) {
    handleQueryResponse(response, containerId);
  });
}

function handleQueryResponse(response, containerId) {
  var data = response.getDataTable();
  var columns = data.getNumberOfColumns();
  var rows = data.getNumberOfRows();
  console.log(data.toJSON());

  const colors = ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 206, 86)', 'rgb(153, 102, 255)'];
  dataj = JSON.parse(data.toJSON());
  console.log(dataj.cols[0].label);
  const labels = [];
  for (c = 1; c < dataj.cols.length; c++) {
    if (dataj.cols[c].label != "") {
      labels.push(dataj.cols[c].label);
    }

  }
  console.log(labels);
  const datasets = [];
  for (i = 0; i < dataj.rows.length; i++) {
    const series_data = [];
    for (j = 1; j < dataj.rows[i].c.length; j++) {
      if (dataj.rows[i].c[j] != null) {
        if (dataj.rows[i].c[j].v != null) {
          series_data.push(dataj.rows[i].c[j].v);
        } else {
          series_data.push(0);
        }
      }
    }
    var dataset = {
//      backgroundColor: colors[i],
//      borderColor: colors[i],
      borderWidth: 1,
      data: series_data
    }

    datasets.push(dataset);

  }
  console.log(datasets);

  const chartdata = {
    labels: labels,
    datasets: datasets
  };

  var canvas = document.getElementById(containerId);

  var setup = {
    type: 'doughnut',
    data: chartdata,
    options: {
      plugins: {
        title: {
          display: true,
          text: dataj.cols[0].label
        },
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let finalString = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
              return `${finalString}`;
            }
          }
        }
      },
    },
    plugins: [doughnutLabel]
  }
  chart = new Chart(canvas, setup);
}
