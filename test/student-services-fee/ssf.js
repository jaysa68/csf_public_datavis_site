const ssfChart = document.getElementById('ssf');

const data = {
  labels: ['University Health Services', 'AVC SA & Dean of Students', 'Equity & Inclusion Division', 'Undergraduate Education', 'Other Departments', 'Financial Aid', 'Student Affairs Services', 'Graduate Division', 'Strategic Acad and Fac Plan', 'Student Affairs Immed Off', 'BAMPFA'],
  datasets: [{
    label: 'Cost per semester',
    data: [14048487, 7824953, 4483358.94, 3369773, 3343854.26, 2363619, 2055134.1, 1604870.8, 1389940, 1337027.9, 1300497],
    borderWidth: 1
  }]
};

new Chart(ssfChart, {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
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
  }
});

