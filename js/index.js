(function() {
    // 利用排他法
    var a_ = document.getElementsByClassName('a');
    // console.log(a_);
    // 显示内容  动漫
    var animation_ = document.getElementsByClassName('animation');
    var fault_ = document.getElementsByClassName('fault');
    //排他发
    for (var i = 0; i < a_.length; i++) {
        a_[i].setAttribute('index', i);
        a_[i].onclick = function() {
            var index = this.getAttribute('index')
                // 切换选中的类名 字体改变颜色
            for (var j = 0; j < a_.length; j++) {
                // 删除类名
                a_[j].classList.remove('ma');
                // 添加类名
                a_[index].classList.add('ma');
            }
            // 内容部分  显示与隐藏
            for (var k = 0; k < fault_.length; k++) {
                fault_[k].style.display = "none";
                fault_[index].style.display = "block";
            }
            for (var r = 0; r < animation_.length; r++) {
                animation_[r].style.display = "none";
                animation_[index].style.display = "block";
            }
        }
    }
})();


//饼型
(function() {
    var myChart = echarts.init(document.getElementsByClassName('distribute')[0]);
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            // item 表述 鼠标到饼图的每一项内容的时候 触发提示信息
            trigger: 'item',
            // a:series 选项下面的name
            // b:  series下面data中的name
            // c:  series下面data中的value
            // d:  当前value 占所以内容的比例
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name: '老陈学员分布',
            // pie 饼图  
            type: 'pie',
            // 百分比 具体指都可以  百分比加一号
            // 1：内圆的半径  2 外圆的半径
            radius: ['10%', '60%'],
            // 设置水平方向  垂直方法  50% 居中
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                fontSize: 10
            },
            labelLine: {
                //调第一根线的长度
                length: 4,
                length2: 7
            },
            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '河南' }
            ]
        }]
    };

    myChart.setOption(option);


    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load', function() {
        myChart.resize();
    });

    // 当屏幕重置大小的时候 继续调用echarts的重置大小方法
    // 自动适应当前屏幕
    window.addEventListener('resize', function() {
        myChart.resize();
    })

})();


//全国用户总量统计
(function() {
    //     // 单独设设置的三个颜色
    var item = {
        name: '',
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }

    }
    var myChart = echarts.init(document.getElementsByClassName('columnar')[0])
    var option = {

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '4%',
            containLabel: true,
            // 显示y轴两侧的线
            show: true,
            // 两侧颜色
            borderColor: 'rgba(0, 240, 255, 0.3)',
            // // 控制高度
            // height: '160px'
        },
        xAxis: [{
            type: 'category',
            data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
                alignWithLabel: true,
                // 去除刻度点
                show: false
            },
            // 改变x轴字体颜色
            axisLabel: {
                color: "#71f2fb"
            },
            // x轴最底部线的颜色
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                }
            }
        }],
        yAxis: [{
            type: 'value',
            // 改变y轴字体颜色
            axisLabel: {
                color: "#71f2fb"
            },
            // 去除y轴刻度
            axisTick: {
                show: false
            },
            // 改变X轴线的颜色
            splitLine: {
                lineStyle: {
                    // 分割线颜色
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        // 渐变颜色
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },

        tooltip: {
            trigger: 'item',
            // 触发的时候 效果  shadow 阴影
            //                line 虚线
            //                none 没效果
            axisPointer: {
                type: 'none'
            }
        },
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
        }]
    };
    myChart.setOption(option);
    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load', function() {
        myChart.resize();
    });

    // 当屏幕重置大小的时候 继续调用echarts的重置大小方法
    // 自动适应当前屏幕
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();



// 天数 
(function() {
    // 时间选项
    var p1_ = document.getElementsByClassName('p1');
    // 内容切换
    var data_ = document.getElementsByClassName('day')
    for (var i = 0; i < p1_.length; i++) {
        p1_[i].setAttribute('index', i);
        p1_[i].onclick = function() {
            var index = this.getAttribute('index');
            for (var j = 0; j < p1_.length; j++) {
                // pp是添加的类名
                p1_[j].classList.remove('pp');
                p1_[index].classList.add('pp')
            }
            // 内容切换内容
            for (var a = 0; a < data_.length; a++) {
                //  通过类名来控制类名 删除一个添加一个
                data_[a].classList.add('day1');
                //有index的都给删了
                data_[index].classList.remove('day1')
            }
        }
    }
    // 封装一个自动切换的函数
    var sum = null;

    function auto() {
        time = setInterval(function() {
            sum++;
            if (sum >= p1_.length) {
                sum = 0;
            }
            // 调用
            p1_[sum].click();
        }, 1500);
    }
    // 调用函数
    auto();
    // 鼠标移入的时候  停止 切换
    var predestination_ = document.getElementsByClassName('predestination')[0];
    //    鼠标移入
    predestination_.onmouseenter = function() {
            // 清空定时器
            clearTimeout(time);
        }
        // 鼠标移出继续切换
    predestination_.onmouseleave = function() {
        //上面切换的已将封装成了一个  函数 当鼠标 离开的时候  调用  设置时间
        auto(), 1500;
    }
})();




// 控制年月日
(function() {
    // 折现图位置
    // 数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var myChart = echarts.init(document.getElementsByClassName('discounting')[0]);
    console.log(myChart);
    var option = {
        title: {
            subtext: '单位：万',
            padding: [-5, 0, 0, 10],
            subtextStyle: {
                color: '#4996F5',
                fontSize: '12px'
            }
        },
        // 改变线的颜色
        color: ['#00f2f1', '#ed3f35'],
        // 提示信息
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            // 可以调节高低
            top: '22%',
            containLabel: true,
            borderColor: '#012f4a', // 边框颜色
            containLabel: true, // 包含刻度文字在内
            show: true,
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                // 文本颜色
                color: '#4c9bfd'
            },
            axisLine: {
                // 去除轴线
                show: false
            },
            // 去除轴内间距
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [{
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                smooth: true
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: data.year[1],
            },
        ]
    };
    // 获取年月日
    var a1_ = document.getElementsByClassName('a2')
        // console.log(a1_);
    for (var i = 0; i < a1_.length; i++) {
        a1_[i].setAttribute('index', i);
        a1_[i].onclick = function() {
            var index = this.getAttribute('index')
            for (var j = 0; j < a1_.length; j++) {
                // 类名a1是需要切换的样式
                a1_[j].classList.remove('a1') //删除
                a1_[index].classList.add('a1') //添加
            }
            // 通过data- 获取数据
            var time_ = this.getAttribute('data-time');
            option.series[0].data = data[time_][0];
            option.series[1].data = data[time_][1];
            myChart.setOption(option);
        }
    }
    // 封装一个函数 自动切换
    var sum = 0; //计数器
    var time = null; //接收计数器
    function auto() {
        time = setInterval(function() {
            sum++;
            if (sum >= a1_.length) {
                sum = 0;
            }
            a1_[sum].click();
        }, 1000);
    }
    // 调用函数
    auto();
    // 鼠标移入暂停
    // 找到父级盒子
    var statistics1 = document.getElementsByClassName('statistics1')[0];
    // console.log(statistics1);
    // 移入
    statistics1.onmouseenter = function() {
            clearInterval(time); //清空定时器
        }
        //鼠标移出   再次掉使用封装好的  函数
    statistics1.onmouseleave = function() {
        // 再次调用
        auto(), 1000;
    }





    myChart.setOption(option);
    // 适应折现图大小
    window.addEventListener('load', function() {
        myChart.resize();
    })
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();



// 雷达图
(function() {
    var myChart = echarts.init(document.getElementsByClassName('radar')[0]);

    const dataBJ = [
        [45, 9, 56, 0.46, 18, 6, 1],

    ];
    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    var option = {
        // backgroundColor: '#161627',
        // 控制大小的   
        radius: '50%',
        radar: {
            indicator: [
                { name: '机场', max: 90 },
                { name: '商场', max: 90 },
                { name: '火车站', max: 90 },
                { name: '汽车站', max: 90 },
                { name: '地铁', max: 90 }
            ],
            shape: 'circle',
            // 控制几个圆圈
            splitNumber: 4,
            axisName: {
                //雷达图 文字的颜色
                color: '#4c9bfd'
            },

            splitLine: {
                lineStyle: {
                    color: [
                        // 雷达图圆 的颜色
                        'rgba(238, 197, 102, 0.1)',
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    // 雷达图内交叉轴的颜色
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        tooltip: {
            show: true,
            position: ['60%', '0%'],
            backgroundColor: ' rgba(135, 207, 235, 0.394)'
        },
        series: [{
            name: 'Beijing',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                color: '#F9713C'
            },
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            data: [
                // 控制雷达图大小
                [70, 10, 56, 11, 34]
            ],
            symbol: 'circle',
            symbolSize: 5,
            areaStyle: {
                opacity: 0.1
            },

            itemStyle: {
                // 雷达图内的小圆点及提示信息的边框颜色
                color: '#fff'
            },
            label: {
                show: true,
                // 字体颜色
                color: '#fff',
                fontSize: 10
            },
            areaStyle: {
                color: 'rgba(238, 197, 102, 0.6)',
            },
        }, ]
    };

    myChart.setOption(option)


    // 调节默认大小
    window.addEventListener('load', function() {
        myChart.resize();
    })
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})()