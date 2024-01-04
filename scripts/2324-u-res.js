google.charts.load('current', {
  'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(initChart);

function initChart() {
  URL = "https://docs.google.com/spreadsheets/d/1kccrFJIMqa07EfZEFPi4obVsTSS6wp-UuKxbihcfwvc/edit?usp=sharing";
  var query = new google.visualization.Query(URL);
  query.setQuery('select *');
  query.send(function(response) {
    handleQueryResponse(response);
  });
}

function handleQueryResponse(response) {
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
      data: series_data
    }

    datasets.push(dataset);

  }
  console.log(datasets);

  const chartdata = {
    labels: labels,
    datasets: datasets
  };
  var canvas = document.getElementById("2324uResChart");
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
        }
      },
    }
  }
  chart = new Chart(canvas, setup);

}
