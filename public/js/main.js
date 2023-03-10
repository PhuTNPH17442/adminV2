

$(document).ready(function(){
    pieChartData();
    userChartData();
    hobbiesChartData();
    educationChartData();
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
          text: 'Ratio of men and women using the app',
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
const userChartData = async()=>{
   
  $.ajax({
    url:'/userChart',
    type:'GET',
    datatype:'json',
    success: (response)=>{}
    ,
    error:(err)=>{
        console.log(err)
    }
    })
  Highcharts.chart('userChart', {

    title: {
      text: 'Users Join Every Month, 4/2022-2/2023',
      align: 'left'
    },
  
    // subtitle: {
    //   text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
    //   align: 'left'
    // },
  
    // yAxis: {
    //   title: {
    //     text: 'Number of Employees'
    //   }
    // },
  
    xAxis: {
      
      categories:['Th??ng 4/2022','Th??ng 5/2022', 'Th??ng 6/2022','Th??ng 7/2022','Th??ng 8/2023','Th??ng 9/2023', 'Th??ng 10/2023','Th??ng 11/2022', 'Th??ng 12/2022', 'Th??ng 1/2023', 'Th??ng 2/2023']
      
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    // plotOptions: {
    //   series: {
    //     label: {
    //       connectorAllowed: false
    //     },
    //     pointStart: 2022
    //   }
    // },
  
    series: [{
      name: 'New User',
      data: [0, 0, 0, 0, 0, 14,
        17, 16, 15, 16, 15]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });
}
const hobbiesChartData = async()=>{
   let countPhim = 0;
   let countHipHop = 0;
   let countSuoi = 0;
   let countDa = 0;
   let countHan = 0;
   let countGiaoLuu = 0;
   let countDuLich = 0;
   let countChay = 0;
   let countGym = 0;
   let count9x = 0;
   let countPTXH = 0;
   
  $.ajax({
    url:'/hobbiesChart',
    type:'GET',
    datatype:'json',
    success: (response)=>{
      const {countPhim,countHipHop,countSuoi,countDa,countHan,countGiaoLuu,countDuLich,countChay,countGym,count9x,countPTXH} = response
    }
    ,
    error:(err)=>{
        console.log(err)
    }
    })
    Highcharts.chart('hobbiesChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'HOBBIES'
      },
      // subtitle: {
      //   text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>'
      // },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'User'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
      },
      series: [{
        name: 'Population',
        data: [
          ['Phim H??n', 37.33],
          ['HipHop', 31.18],
          ['Phim', 27.79],
          ['Giao L??u', 22.23],
          ['Su???i N??ng', 21.91],
          ['Th??? H??? 9x', 21.74],
          ['Ph??t tri???n XH', 21.32],
          ['T???p Gym', 20.89],
          ['Ch???y B???', 20.67],
          ['Du l???ch', 19.11],
          ['Ch??m s??c da', 16.45]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    });
}
  const educationChartData = async()=>{
    $.ajax({
      url:'/userChart',
      type:'GET',
      datatype:'json',
      success: (response)=>{}
      ,
      error:(err)=>{
          console.log(err)
      }
      })
      Highcharts.chart('educationChart', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'World\'s largest cities per 2021'
        },
        subtitle: {
          text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>'
        },
        xAxis: {
          type: 'category',
          labels: {
            rotation: -45,
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population (millions)'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
        },
        series: [{
          name: 'Population',
          data: [
            ['PTPM', 37.33],
            ['WEB', 31.18],
            ['MOB', 27.79],
            ['UDPM', 22.23],
            ['XLDL', 21.91],
            ['Sale', 21.74],
            ['Digital', 21.32],
            ['Logistic', 20.89],
            ['Kh??ch S???n', 20.67],
            ['Nh?? H??ng', 19.11],
            ['T??? ?????ng H??a', 16.45],
            ['??i???n T???', 16.38],
            ['??i???n CN', 15.41],
            ['TKDH', 15.25],
            ['HD Du l???ch', 14.974],
            ['C?? Kh??', 14.970],
            ['Spa ', 14.86],
            ['Make', 14.16],
            ['Phun th??u', 13.79],
            ['Mi M??ng', 13.64]
          ],
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        }]
      });
  }
  const indexHTM = async()=>{
    $.ajax({
      url:'/index',
      type:'GET',
      datatype:'json',
      success: (response)=>{
        console.log(response)
        document.getElementById("numbers").innerHTML = response
      }
      ,
      error:(err)=>{
          console.log(err)
      }
      })
  }