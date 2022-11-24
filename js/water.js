(function() {
    var myChart = echarts.init(document.getElementsByClassName('water1')[0])
        // 这个地方可以 修改  水球里面 的值
    let compositeScore = 0.66;
    var option = {

        graphic: [{
            type: "group",
            left: "center",
            top: "58%",
            children: [{
                type: "text",
                z: 100,
                left: "10",
                top: "middle",
                style: {
                    fill: "#fff",
                    text: "综合评分",
                    font: "12px PingFangSC-Regular",
                },
            }, ],
        }, ],
        series: [{
            type: "liquidFill", //水位图
            radius: "85%", //显示比例
            center: ["50%", "50%"], //中心点
            data: [compositeScore], // data个数代表波浪数
            color: ["#90132a81"], //波浪颜色
            backgroundStyle: {
                // color: ["#FFA022"], //波浪颜色
                color: {
                    type: "linearGradient",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 1,
                            // color: "rgba(17,65,86,0.64)",
                            color: "red",
                        },
                        {
                            offset: 0.51,
                            // color: "rgba(32,70,84,0)",
                            color: "pink",
                        },
                        // 改变波浪后面的背景颜色
                        {
                            offset: 0,
                            // color: "rgba(99,254,254,0.35)",
                            color: "#1A87B3",
                        },
                    ],
                    globalCoord: false,
                },
            },
            label: {
                //标签设置
                position: ["50%", "50%"],
                formatter: compositeScore * 100 + "%", //显示文本
                fontSize: "25px",
                fontFamily: "DINAlternate-Bold",
                fontWeight: "bold",

            },
            outline: {
                show: true,
                borderDistance: 5,
                itemStyle: {
                    // 改变外围圈的颜色
                    borderColor: "#B22937",
                    // 改变外围圈的宽度
                    borderWidth: 1,
                },
            },
        }, ],
    };
    myChart.setOption(option);
    window.addEventListener('load', function() {
        myChart.resize();
    })
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})()