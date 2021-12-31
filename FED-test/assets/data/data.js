function LoadDatas(){

    this.loadData = function(){
        var data = {
            noOfEmp: "1,200",
            nextTestDate: "01/02/2022",
    
            empHealthData:{
                theme1: {
                    name: "Bad",
                    color: "#CC4759"
                },
    
                theme2: {
                    name: "Good",
                    color: "#1C8577"
                },
    
                theme3: {
                    name: "Border",
                    color: "#CC8828"
                },

                months: ["Jan 2021", "Feb 2021" , "Mar 2021", "Apr 2021"],

                currentMonthIndex: 0,

                dataPointss : [
                    [
                        {good: 15, bad: 15, border: 20},
                        {good: 20, bad: 15, border: 13},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 15, border: 20},
                        {good: 20, bad: 15, border: 13},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 15, border: 20},
                        {good: 20, bad: 15, border: 13},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 15, border: 20},
                        {good: 20, bad: 15, border: 13},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 15, border: 20},
                        {good: 20, bad: 15, border: 13},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 15, border: 20},
                        {good: 20, bad: 15, border: 13},
                        {good: 13, bad: 26, border: 28}
                    ],
                    [
                        {good: 25, bad: 25, border: 20},
                        {good: 10, bad: 25, border: 19},
                        {good: 19, bad: 26, border: 18},
                        {good: 25, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 19},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 13},
                        {good: 23, bad: 26, border: 18},
                        {good: 15, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 19},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 13},
                        {good: 23, bad: 26, border: 18},
                        {good: 15, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 13},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 13},
                        {good: 23, bad: 26, border: 18},
                        {good: 15, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 13},
                        {good: 13, bad: 26, border: 28}
                    ],
                    [
                        {good: 35, bad: 5, border: 10},
                        {good: 30, bad: 15, border: 13},
                        {good: 53, bad: 26, border: 28},
                        {good: 35, bad: 15, border: 20},
                        {good: 40, bad: 15, border: 13},
                        {good: 33, bad: 16, border: 8},
                        {good: 35, bad: 15, border: 20},
                        {good: 40, bad: 15, border: 13},
                        {good: 33, bad: 26, border: 28},
                        {good: 55, bad: 15, border: 20},
                        {good: 50, bad: 15, border: 13},
                        {good: 23, bad: 26, border: 28},
                        {good: 35, bad: 15, border: 20},
                        {good: 40, bad: 15, border: 13},
                        {good: 31, bad: 12, border: 8},
                        {good: 35, bad: 15, border: 20},
                        {good: 30, bad: 10, border: 10},
                        {good: 53, bad: 16, border: 18}
                    ],
                    [
                        {good: 25, bad: 25, border: 20},
                        {good: 10, bad: 25, border: 19},
                        {good: 19, bad: 26, border: 18},
                        {good: 25, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 19},
                        {good: 13, bad: 26, border: 28},
                        {good: 15, bad: 25, border: 20},
                        {good: 20, bad: 25, border: 13},
                        {good: 23, bad: 26, border: 18},
                        {good: 15, bad: 25, border: 20}
                    ]
                ]
            },

            tableData : [
                {orderNumber: 3456, status: "Pending", operator: "James Willson", location: "New York", startDate: "12/05/2018", dueDate: "05/04/2019"},
                {orderNumber: 5649, status: "Completed", operator: "Broad Conway", location: "Las Vegas", startDate: "24/08/2018", dueDate: "03/12/2019"},
                {orderNumber: 6854, status: "Pending", operator: "Steve Waugh", location: "California", startDate: "12/05/2018", dueDate: "05/04/2019"},
                {orderNumber: 8523, status: "Completed", operator: "Mark Nord", location: "California", startDate: "12/05/2018", dueDate: "05/04/2019"},
                {orderNumber: 3456, status: "Cancelled", operator: "James Willson", location: "New York", startDate: "12/05/2018", dueDate: "03/12/2019"}
            ],

            resultByTeam: [
                {name: "Team 1", good: 75, others: 25},
                {name: "Team 2", good: 55, others: 45},
                {name: "Team 3", good: 38, others: 62},
                {name: "Team 4", good: 85, others: 15}
            ]
        }
        console.log("Data load complete")
        let obj = new ChartsFun(data);
        obj.init();
    }
    
}