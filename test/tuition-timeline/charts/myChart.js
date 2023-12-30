const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Undergraduate Resident Tuition', 'Berkeley Campus Fee', 'Student Services Fee', 'Instructional Resilience & Enhancement Fee (IREF)', 'Class Pass Fee'],
    datasets: [{
      label: '# of Votes',
      data: [5964, 820, 588, 117.5, 105],
      borderWidth: 1
    }]
  },
  options: {
  }
});
