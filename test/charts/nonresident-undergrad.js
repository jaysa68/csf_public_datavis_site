const nonresUGChart = document.getElementById('nonresident-undergrad');

new Chart(nonresUGChart, {
  type: 'doughnut',
  data: {
    labels: ['Undergraduate Resident Tuition', 'Berkeley Campus Fee', 'Student Services Fee', 'Instructional Resilience & Enhancement Fee (IREF)', 'Class Pass Fee'],
    datasets: [{
      label: '# of Votes',
      data: [5964, 820, 588, 117.5, 105],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      title: {
	display: true,
	text: 'Nonresident Undergraduate Student'
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
  }
});
