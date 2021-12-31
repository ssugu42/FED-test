function ChartsFun(data){
    
    var _this =  this;
    _this.data = data;
    var goodAverage = 0, badAverage = 0;

    this.init = function(){
        console.log("JS activated");

        $('#months').change(_this.handleChange)
        $('#noOfEmp').text(_this.data.noOfEmp);
        $('#nxtTestDate').text(_this.data.nextTestDate);

        _this.dropDown();
        _this.loadStakedChart();
        _this.loadTable();
        _this.loadTeamResultChart();
    }

    this.dropDown = function(){
        $(_this.data.empHealthData.months).each(function(index, val){
            $('#months').append(`<option value="${index}">${val}</option>`)
        });
    }

    this.handleChange = function(){
        _this.data.empHealthData.currentMonthIndex = this.value;
        goodAverage = 0;
        badAverage = 0;
        _this.loadStakedChart();
        _this.stakedChart.render();
    }

    this.loadStakedChart = function(){
        _this.stakedChart = new CanvasJS.Chart("barChartBlock", {
            animationEnabled: true,
            axisX: {
                interval: 1,
            },
            axisY:{
                suffix: "%",
            },
            data: [{
                    type: "stackedColumn",
                    showInLegend: true,
                    color: _this.data.empHealthData.theme1.color,
                    name: _this.data.empHealthData.theme1.name,
                    dataPoints: []
                },
                {
                    type: "stackedColumn",
                    showInLegend: true,
                    color: _this.data.empHealthData.theme2.color,
                    name: _this.data.empHealthData.theme2.name,
                    dataPoints: []
                },
                {
                    type: "stackedColumn",
                    showInLegend: true,
                    color: _this.data.empHealthData.theme3.color,
                    name: _this.data.empHealthData.theme3.name,
                    dataPoints: []
                }]
        });

        _this.stakedChart.render();

        _this.reRender();
    }

    this.reRender = function(){
        $(_this.data.empHealthData.dataPointss[_this.data.empHealthData.currentMonthIndex]).each((index, val)=>{
            let g = { y: val.good, label: `${(_this.data.empHealthData.months[_this.data.empHealthData.currentMonthIndex]).substr(0,3)} ${index+1}`}
            let b = { y: val.bad, label: `${(_this.data.empHealthData.months[_this.data.empHealthData.currentMonthIndex]).substr(0,3)} ${index+1}`}
            let brd = { y: val.border, label: `${(_this.data.empHealthData.months[_this.data.empHealthData.currentMonthIndex]).substr(0,3)} ${index+1}`}

            _this.stakedChart.data[0].dataPoints.push(g);
            _this.stakedChart.data[1].dataPoints.push(b);
            _this.stakedChart.data[2].dataPoints.push(brd);

            goodAverage += g.y;
            badAverage += b.y;
        });

        let x = (goodAverage / (goodAverage+badAverage) ) * 100;
        let y = (badAverage / (goodAverage+badAverage) ) * 100;
        // _this.pieChart.data[0].dataPoints[0].y = Math.round(x,2);
        // _this.pieChart.data[0].dataPoints[1].y = Math.round(y,2);

        _this.stakedChart.render();

        _this.loadPieChart(Math.round(x,2), Math.round(y,2));
    }

    this.loadPieChart = function(a, b){
        _this.pieChart = new CanvasJS.Chart("pieChartBlock", {
            animationEnabled: true,
            data: [{
                type: "pie",
                startAngle: 230,
                showInLegend: true,
                dataPoints: [
                    {y: a, label: "Good", color: "#35AC6D", name: "Good"},
                    {y: b, label: "Bad", color: "#F54826", name: "Bad"}
                ]
            }]
        })

        _this.pieChart.render();
    }

    this.loadTable = function(){
        $(_this.data.tableData).each((index, val)=>{
            $('.table').append(`<tr><td>${val.orderNumber}</td><td class="${val.status}"><p>${val.status}</p></td><td>${val.operator}</td><td>${val.location}</td><td>${val.startDate}</td><td>${val.dueDate}</td></tr>`)
        });
    }

    this.loadTeamResultChart = function(){

        $(_this.data.resultByTeam).each((index, val)=>{
            let id = "dougnutChartBlock"+ (index+1);
            $('.teamRslt').append(`<div id="${id}"></div>`)
            
            let dChart = new CanvasJS.Chart(id, {
                animationEnabled: true,
                title:{
                    text: val.name,
                    color: "Black"
                    //horizontalAlign: "left"
                },
                data: [{
                    type: "doughnut",
                    startAngle: 230,
                    showInLegend: false,
                    dataPoints: [
                        {y: val.good, name: "Good", color: "#35AC6D"},
                        {y: val.others, name: "Others", color: "rgb(241, 245, 248)"}
                    ]
                }]
            })
            
            dChart.render();
        })
    }

}