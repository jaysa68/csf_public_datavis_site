const campusFeesChart = document.getElementById('campus-based');

const data = {
  labels: ['Lower Sproul Plaza Fee', 'Wellness Fee', 'Campus Health Care Fee', 'Life Safety Fee', 'Associated Students of University of California (ASUC) Fee', 'Campus Climate & Equity (Big C) Fee', 'Recruitment and Retention (STARR) Fee', 'Educational Opportunity & Equity (GOLD) Fee', 'Student Basic Needs Fee', 'The Green Initiative Fund (TGIF) Fee', 'Student Center Fee', 'Save the Daily Cal Initiative (V.O.I.C.E.) Fee', 'Housing Security Fee', 'Ethnic Studies Fee'],
  datasets: [{
    label: 'Cost per semester',
    data: [306.00, 212.75, 92.75, 46.00, 34.00, 33.00, 28.75, 20.75, 17.25, 10.00, 6.00, 6.00, 4.50, 2.25],
    borderWidth: 1
  }]
};

new Chart(campusFeesChart, {
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
		    console.log(context.parsed);
		    return `\$${context.parsed}`;
	    }
	}
      }
    }
  }
});

