

$(document).ready(function(){
    pieChartData();
}) 

const pieChartData = async()=>{
    let countMaleData = 0
    let countFemaleData = 0
    $.ajax({
        url:'/pieChart',
        type:'GET',
        datatype:'json',
        success: (response)=>{
        if(response !==null){
            //  console.log(response)
            const {countMale,countFemale} = response
            const total = countMale + countFemale
             countFemaleData = parseFloat(((countFemale/total)*100).toFixed(2))
             countMaleData = parseFloat(((countMale/total)*100).toFixed(2))
             renderPieChart({countFemaleData,countMaleData})
        }
    },
    error:(err)=>{
        console.log(err)
    }
    })
}
    const renderPieChart = ({countFemaleData,countMaleData})=>{
    Highcharts.chart('pieChart', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Browser market shares in May, 2020',
          align: 'left'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: 'Data',
          colorByPoint: true,
          data: [{
            name: 'Male',
            y: countMaleData,
            sliced: true,
            color:'#33F4FF'
          }, {
            name: 'Female',
            y: countFemaleData,
            color:'#56FF33'
          }]
        }]
      });
}
