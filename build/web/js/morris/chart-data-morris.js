// First Chart Example - Area Line Chart

Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-area',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2013-11-01', consumption: 802 },
	{ d: '2013-11-02', consumption: 783 },
	{ d: '2013-11-03', consumption:  820 },
	{ d: '2013-11-04', consumption: 839 },
	{ d: '2013-11-05', consumption: 792 },
	{ d: '2013-11-06', consumption: 859 },
	{ d: '2013-11-07', consumption: 790 },
	{ d: '2013-11-08', consumption: 1680 },
	{ d: '2013-11-09', consumption: 1592 },
	{ d: '2013-11-10', consumption: 1420 },
	{ d: '2013-11-11', consumption: 882 },
	{ d: '2013-11-12', consumption: 889 },
	{ d: '2013-11-13', consumption: 819 },
	{ d: '2013-11-14', consumption: 849 },
	{ d: '2013-11-15', consumption: 870 },
	{ d: '2013-11-16', consumption: 1163 },
	{ d: '2013-11-17', consumption: 1192 },
	{ d: '2013-11-18', consumption: 1224 },
	{ d: '2013-11-19', consumption: 1329 },
	{ d: '2013-11-20', consumption: 1329 },
	{ d: '2013-11-21', consumption: 1239 },
	{ d: '2013-11-22', consumption: 1190 },
	
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['consumption'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Consumption'],
  // Disables line smoothing
  smooth: false,
});

Morris.Donut({
  element: 'morris-chart-donut',
  data: [
    {label: "August", value: 42.7},
    {label: "September", value: 8.3},
    {label: "October", value: 12.8},
    {label: "November", value: 36.2}
  ],
  formatter: function (y) { return y + "%" ;}
});

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-line',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2013-11-01', consumption: 802 },
	{ d: '2013-11-02', consumption: 783 },
	{ d: '2013-11-03', consumption:  820 },
	{ d: '2013-11-04', consumption: 839 },
	{ d: '2013-11-05', consumption: 792 },
	{ d: '2013-11-06', consumption: 859 },
	{ d: '2013-11-07', consumption: 790 },
	{ d: '2013-11-08', consumption: 1680 },
	{ d: '2013-11-09', consumption: 1592 },
	{ d: '2013-11-10', consumption: 1420 },
	{ d: '2013-11-11', consumption: 882 },
	{ d: '2013-11-12', consumption: 889 },
	{ d: '2013-11-13', consumption: 819 },
	{ d: '2013-11-14', consumption: 849 },
	{ d: '2013-11-15', consumption: 870 },
	{ d: '2013-11-16', consumption: 1163 },
	{ d: '2013-11-17', consumption: 1192 },
	{ d: '2013-11-18', consumption: 1224 },
	{ d: '2013-11-19', consumption: 1329 },
	{ d: '2013-11-20', consumption: 1329 },
	{ d: '2013-11-21', consumption: 1239 },
	{ d: '2013-11-22', consumption: 1190 },
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['consumption'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Consumption'],
  // Disables line smoothing
  smooth: false,
});

Morris.Bar ({
  element: 'morris-chart-bar',
  data: [
	{year: '2008', consumption: 1363213},
	{year: '2009', consumption: 1373123},
	{year: '2010', consumption: 2751234},
	{year: '2011', consumption: 3806565},
	{year: '2012', consumption: 6556565},
	{year: '2013', consumption: 15716546}
  ],
  xkey: 'year',
  ykeys: ['consumption'],
  labels: ['Consumption'],
  barRatio: 0.4,
  xLabelAngle: 35,
  hideHover: 'auto'
});
