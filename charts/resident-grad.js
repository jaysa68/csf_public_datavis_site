const resGChart = document.getElementById('resident-grad');

const resGdoughnutLabel = {
  id: 'doughnutLabel',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {ctx, data} = chart;

    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    
    let theSum = 0;
    for (var i = 0; i < data.datasets[0].data.length; i++)
      theSum += data.datasets[0].data[i];
    let finalString = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(theSum);

    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = 'rgba(54, 162, 235, 1)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(finalString, xCoor, yCoor);
  }
}

new Chart(resGChart, {
  type: 'doughnut',
  data: {
    labels: ['Resident Graduate Academic Tuition', 'Student Services Fee', 'Berkeley Campus Fee', 'Instructional Resilience & Enhancement Fee (IREF)', 'Class Pass Fee'],
    datasets: [{
      label: '# of Votes',
      // 12264 (G t)
      data: [12264, 1206, 820, 117.5, 105],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      title: {
	display: true,
	text: 'Resident Graduate Student'
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
    }
  },
  plugins: [doughnutLabel]
});
