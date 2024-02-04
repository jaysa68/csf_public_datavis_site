google.charts.load('current', {
  'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(initCharts);

//set global default font
Chart.defaults.font.family = "'ReadexPro'"
Chart.defaults.font.size = 13;
Chart.defaults.plugins.title.font.size = 17;

function initCharts() {
  createChart("nominal-in-state", "https://docs.google.com/spreadsheets/d/1H1Hf62aBsyDmWO11SdYACKGFVm8d7HPemkvp-UFQcNM/edit#gid=0");
  createChart("nominal-out-of-state", "https://docs.google.com/spreadsheets/d/1M6E0q2z9Ui75L15HhvxyOM3ot8d3Rmqw6vpgrTayKXk/edit?usp=sharing");
  createChart("real-in-state", "https://docs.google.com/spreadsheets/d/1H1Hf62aBsyDmWO11SdYACKGFVm8d7HPemkvp-UFQcNM/edit#gid=0");
  createChart("real-out-of-state", "https://docs.google.com/spreadsheets/d/1H1Hf62aBsyDmWO11SdYACKGFVm8d7HPemkvp-UFQcNM/edit#gid=0");
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
      label: dataj.rows[i].c[0].v,
      backgroundColor: colors[i],
      borderColor: colors[i],
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
    type: 'line',
    data: chartdata,
    options: {
      scales: {
        y: {
          ticks: {
            //Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
              let finalString = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, }).format(value);
              return finalString;
            }
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: dataj.cols[0].label
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let formattedValue = "$" + context.formattedValue
              let finalString = context.dataset.label + ": " + formattedValue
              return `${finalString}`;
            }
          }
        }
      },
    },
  }
  chart = new Chart(canvas, setup);
}
