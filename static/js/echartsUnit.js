var drawChart = {
    applyIf: function(o, c) {
        if (o) {
            for (var p in c) {
                if (o[p] === undefined) {
                    o[p] = c[p];
                }
            }
        }
        return o;
    },
    drawLine: function(dom, option, echarts) {
        console.log('echarts:', echarts)
        var myChart = echarts.init(dom[0]);
        defaultOption = {
            backgroundColor: '#fff',
            color: ["#33b9ff", "#ffc62f", "#6c6fbe", "#6b6dc2", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            toolbox: {
                feature: {
                    magicType: {
                        type: ["line", "bar"]
                    },
                    saveAsImage: {}
                },
                iconStyle: {
                    normal: {
                        borderColor: '#c2c2c2'
                    }
                },
                top: 34,
                right: 35
            },
            tooltip: {
                show: true,
                trigger: "axis",
                axisPointer: {
                    type: "line",
                    animation: true,
                    lineStyle: {
                        color: '#888888'
                    }
                }
            },
            grid: {
                left: '90px',
                right: '50px',
                top: '118px',
                bottom: '128px'
            },
            yAxis: {
                scale: true,
                axisLabel: {}
            },
            xAxis: {}
        }
        drawChart.applyIf(option, defaultOption)
        option.title = {
            text: option.title,
            left: 46,
            top: 34,
            textStyle: {
                fontWeight: "normal",
                fontSize: 22,
                fontFamily: '微软雅黑,Lantinghei SC'
            }
        };
        option.legend = {
            orient: "horizontal",
            x: "center",
            itemWidth: 12,
            itemHeight: 12,
            itemGap: 15,
            bottom: 42,
            selected: {},
            data: []
        }
        if (option.series.length > 0) {
            for (var i = 0; i < option.series.length; i++) {
                var serieName = option.series[i].name;
                //					var flag = false;
                //					for(var j = 0;j<option.series[i].data.length;j++){
                //						if(option.series[i].data[j]){
                //							flag = true;
                //							break;
                //						}
                //					}
                //					if(flag){
                //						option.series[i].areaStyle={
                //							normal:{
                //								color:eChartsUtil.areaColor[i]
                //							}
                //						};
                //					}
                option.series[i].smooth = true;
                option.series[i].showSymbol = true;
                if (option.series.length > 1) {
                    var legendObj = {};
                    legendObj.name = option.series[i].name;
                    legendObj.icon = "circle"
                    option.legend.data.push(legendObj);

                    if (serieName) {
                        //只选中前两个
                        if (i < 2) {
                            option.legend.selected[serieName] = true;
                        } else {
                            option.legend.selected[serieName] = false;
                        }
                    }
                }
            }
        }
        option.yAxis.axisLine = {
            show: false
        };
        option.yAxis.axisTick = {
            show: false
        };
        option.xAxis.splitLine = {
            show: false
        };
        option.xAxis.axisLine = {
            show: false
        };
        option.xAxis.axisTick = {
            show: false
        };
        option.xAxis.axisLabel = {
            textStyle: {
                color: '#a8a8a8'
            }
        };
        option.yAxis.axisLabel = {
            textStyle: {
                color: '#a8a8a8'
            }
        };
        option.xAxis = option.xaxis
        myChart.clear();
        myChart.setOption(option);
    },
    drawLineBar: function(dom, option, echarts) {
        var myChart = echarts.init(dom[0]);
        defaultOption = {
            backgroundColor: '#fff',
            color: ["#33b9ff", "#ffc62f", "#6c6fbe", "#6b6dc2", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            toolbox: {
                feature: {
                    magicType: {
                        type: ["line", "bar"]
                    },
                    saveAsImage: {}
                },
                iconStyle: {
                    normal: {
                        borderColor: '#c2c2c2'
                    }
                },
                top: 10,
                right: 35
            },
            legend: {
                orient: "horizontal",
                x: "center",
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 15,
                bottom: 42,
                selected: {},
                data: []
            },
            grid: {
                left: '90px',
                right: '90px',
                top: '118px',
                bottom: '128px'
            },
            yAxis: [{
                type: 'value'
            }, {
                type: 'value'
            }],
            xAxis: {}
        }
        drawChart.applyIf(option, defaultOption)
        option.title = {
            text: option.title,
            left: 46,
            top: 34,
            textStyle: {
                fontWeight: "normal",
                fontSize: 22,
                fontFamily: '微软雅黑,Lantinghei SC'
            }
        };
        if (option.series.length > 1) {
            for (var i = 0; i < option.series.length; i++) {
                var serieName = option.series[i].name;
                if (option.series[i].type == "line") {
                    option.series[i].yAxisIndex = 1;
                }
                if (serieName) {
                    //只选中前两个
                    if (i > 2) {
                        option.legend.selected[serieName] = false;
                    } else {
                        option.legend.selected[serieName] = true;
                    }
                    //放置图例信息
                    option.legend.data.push(serieName);
                }

            }
        }
        option.xAxis = option.xaxis
        myChart.clear();
        myChart.setOption(option);
    },
    drawRank: function(dom, option, echarts) {
        var myChart = echarts.init(dom[0]);
        defaultOption = {
            backgroundColor: '#fff',
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    animation: true,
                    shadowStyle: {
                        opacity: 1
                    }
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                iconStyle: {
                    normal: {
                        borderColor: '#c2c2c2'
                    }
                },
                top: 34,
                right: 35
            },
            grid: {
                left: '117px',
                right: '132px',
                top: '118px',
                bottom: '28px'
            },
            yAxis: {
                data: []
            },
            xAxis: {
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        }
        drawChart.applyIf(option, defaultOption)
        option.title = {
            text: option.title,
            left: 46,
            top: 34,
            textStyle: {
                fontWeight: "normal",
                fontSize: 22,
                fontFamily: '微软雅黑,Lantinghei SC'
            }
        };

        var rankWidths = parseInt(dom.width() - 226);
        var rankTop = -18;
        var barWidth = 15;
        var colorsArr = ['#ffc62f', '#6c6fc0', '#00b9e2', '#aae3f6', '#aae3f6', '#aae3f6', '#aae3f6', '#aae3f6', '#aae3f6', '#aae3f6', '#aae3f6', '#aae3f6']
        for (var i = 0; i < option.series.length; i++) {
            option.series[i].label = {
                normal: {
                    show: true,
                    position: [rankWidths, 0],
                    textStyle: {
                        color: '#666666'
                    }
                },
                emphasis: {
                    show: true,
                    position: [rankWidths, 0],
                    textStyle: {
                        color: '#666666'
                    }
                }
            }
            option.series[i].itemStyle = {
                normal: {
                    barBorderRadius: [18, 18, 18, 18],
                    color: function(params) {
                        return colorsArr[params.dataIndex];
                    }
                }
            }
            option.tooltip.formatter = function(params, ticket, callback) {
                var rankTip = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + colorsArr[params[0].dataIndex] + '"></span>' + params[0].seriesName + ':' + params[0].data;
                return rankTip;
            }
            option.series[i].barWidth = barWidth;
        }
        var maxData = 0;
        var dataArr = [];
        if (option.series.length > 0) {
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (maxData < option.series[0].data[i]) {
                    maxData = option.series[0].data[i]
                }
            }
            for (var i = 0; i < option.series[0].data.length; i++) {
                dataArr.push(maxData)
            }
        }

        var shadowSeries = {
            type: 'bar',
            legendHoverLink: false,
            z: 0,
            itemStyle: {
                normal: {
                    color: '#e9e9e9',
                    barBorderRadius: [18, 18, 18, 18]
                },
                emphasis: {
                    color: '#e9e9e9',
                    barBorderRadius: [18, 18, 18, 18]
                }
            },
            label: {
                emphasis: {
                    show: false
                }
            },
            barWidth: barWidth,
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataArr,
            animation: false
        }
        option.series.push(shadowSeries)
        if (option.xaxis) {
            option.yAxis = option.xaxis
        } else {
            option.yAxis.data = [];
        }

        option.yAxis.axisTick = {};

        option.yAxis.axisTick.show = false;

        option.yAxis.inverse = true;
        option.yAxis.axisLine = {
            show: false
        }

        option.yAxis.axisLabel = {
            margin: 10,
            padding: [0, 0, 0, 0],
            textStyle: {},
            inside: false,
            align: 'left'
        };


        option.yAxis.axisLabel.textStyle.fontSize = 14;
        option.yAxis.axisLabel.textStyle.color = '#666666';
        option.xAxis.max = 'dataMax';
        myChart.clear();
        myChart.setOption(option);
    },
    drawPie: function(dom, option, echarts) {
        var myChart = echarts.init(dom[0]);
        option.title = {
            text: option.title,
            left: 46,
            top: 34,
            textStyle: {
                fontWeight: "normal",
                fontSize: 22,
                fontFamily: '微软雅黑,Lantinghei SC'
            }
        };
        var itemDatas = [];
        if (option.xaxis && option.series.length > 0) {
            for (var i = 0; i < option.xaxis.data.length; i++) {
                itemDatas.push({
                    name: option.xaxis.data[i],
                    value: option.series[0].data[i]
                })
            }
        }

        console.log('drawPie itemDatas:', itemDatas)

        var opt = {
            backgroundColor: '#fff',
            title: option.title,
            legend: {
                orient: 'vertical',
                right: '20',
                itemWidth: 14,
                itemHeight: 14,
                icon: 'rect',
                bottom: '20',
                data: option.xaxis.data
            },
            series: [{
                type: 'pie',
                color: ['#6e6fc1', '#33bafe', '#fec62b', '#ff9c01', '#38d4be', '#79ce4c'],
                center: ['40%', '50%'],
                radius: ['25%', '55%'],
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{c}({d}%)'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: itemDatas
            }]
        };
        myChart.clear();
        myChart.setOption(opt);
    }
}