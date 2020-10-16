/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
//import * as d3 from 'd3';
import Chart from 'chart.js';
import PieD3 from '../Components/PieD3';



var dataSource = {
    datasets: [
      {
          data: [],
          backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#04B45F',
              '#2E3B0B',
              '#FE2EF7',

          ],
       
      }
  ],
  labels: [],
};



function createChart(){
    var ctx = document.getElementById("myChart");
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data: dataSource
    });
}

function getBudget(){
    axios.get('http://localhost:3000/budget')
      .then(function (res){
          console.log(res);
          for(var i = 0; i <7; i++){
              dataSource.datasets[0].data[i]=res.data[i].budget;
              dataSource.labels[i]=res.data[i].title;
              
          }
          createChart();

    //var data = dataSource.datasets[0].data;
   // var labels = dataSource.labels;
    //var colors = dataSource.datasets[0].backgroundColor;
   // console.log(colors);


      });
}

getBudget();



  
  




function HomePage() {
  return (
<div className="container center">

<div className="page-area">

    <div className="text-box">

        <h3>Stay on track</h3>

        <h2>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
        </h2>
    </div>

    <div className="text-box">

        <article>
        <h3>Alerts</h3>
        <h2>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
        </h2>
        </article>
    </div>

    <div className="text-box">
        <h3>Results</h3>
        <h2>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they to live happier lives... since they expend without guilt or fear... 
            because they know it is all good and accounted for.
        </h2>
    </div>

    <div className="text-box">
        <h3>Free</h3>
        <h2>
            This app is free!!! And you are the only one holding your data!
        </h2>
    </div>

    <div className="text-box">
        <h3>Stay on track</h3>
        <h2>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
        </h2>
    </div>

    <div className="text-box">
        <h3>Alerts</h3>
        <h2>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
        </h2>
    </div>

    <div className="text-box">
        <h3>D3js pie</h3>
        <h2>
            <PieD3/>
        </h2>
    </div>

    <div className="text-box">
        <h3>Chart</h3>
        <h2>
            <canvas id="myChart" width="400" height="400"></canvas>
        </h2>
    </div>

</div>

</div>
  );
}



export default HomePage;