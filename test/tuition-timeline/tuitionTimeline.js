const tuitionTimelineChart = document.getElementById('tuitionTimeline');    
     
new Chart(tuitionTimelineChart, {    
  type: 'line',    
  data: {    
    labels: ['1986-87', '1987-88', '1988-89', '1989-90', '1990-91', '1991-92', '1992-93', '1993-94', '1994-95', '1995-96', '1996-97', '1997-98', '1998-99', '1999-00', '2000-01', '2001-02', '2002-03', '2003-04', '2004-05', '2005-06', '2006-07', '2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23'],   
    datasets: [
      {    
      label: 'Resident Undergraduate Tuition',    
      data: [722, 804, 840, 864, 951, 1581, 2131, 2761, 3086, 3086, 3086, 3086, 2896, 2716, 2716, 2716, 3121, 4271, 4971, 5406, 5406, 5790, 6202, 7998, 9342, 11160, 11160, 11160, 11160, 11160, 11160, 11442, 11442, 11442, 11442, 11442, 11928],
      borderWidth: 1    
      },
      {
      label: "Resident Graduate Tuition",
      data: [782, 804, 840, 864, 951, 1581, 2131, 2761, 3086, 3086, 3086, 3086, 3086, 2896, 2896, 2896, 3301, 4506, 5556, 6162, 6162, 6594, 7062, 7998, 9342, 11160, 11160, 11160, 11160, 11160, 11160, 11442, 11442, 11442, 11442, 11442, 11700],
      borderWidth: 1
      },
      {
      label: "Nonresident Graduate Tuition",
      data: [782, 804, 840, 864, 951, 1581, 2131, 2761, 3086, 3086, 3086, 3086, 3086, 3086, 3086, 3086, 3491, 4751, 5801, 6429, 6429, 6888, 7374, 8352, 9750, 11160, 11160, 11160, 11160, 11160, 11160, 11442, 11442, 11442, 11442, 11442, 11700],
      borderWidth: 1
      }
    ]    
  },    
  options: {    
    scales: {    
      y: {    
        beginAtZero: true    
      }    
    }    
  }    
});



