Highcharts.setOptions({
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
                ]
        },
        borderWidth: 2,
        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
        plotShadow: true,
        plotBorderWidth: 1
    }
});







// $(function () {
//         $('#btc_chart').highcharts({
//             title: {
//                 text: 'Bitcoin',
//                 x: 0 //center
//             },
//             subtitle: {
//                 text: 'Source: Coinbase.com',
//                 x: 0
//             },
//             xAxis: {
//                 // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//                 //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//                 categories: []
//             },
//             yAxis: {
//                 title: {
//                     text: 'Price USD'
//                 },
//                 plotLines: [{
//                     value: 0,
//                     width: 1,
//                     color: '#808080'
//                 }]
//             },
//             tooltip: {
//                 valueSuffix: '°C'
//             },
//             legend: {
//                 layout: 'vertical',
//                 align: 'right',
//                 verticalAlign: 'middle',
//                 borderWidth: 0
//             },
//             series: [{
//                 name: 'Bid',
//                 data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
//             }, {
//                 name: 'Last',
//                 data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
//             }, {
//                 name: 'Ask',
//                 data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
//             }]
//         });
//     });


