<template>
    <div class="main">
        <el-row :gutter="10" class="all">
            <el-col :span="6">
                <el-card shadow="hover" class="left">
                    <div class="container">
                        <img src="../../static/person.png">
                        <div class="a1">访问量</div>
                        <div class="a2">6666</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="center">
                    <div class="container2">
                        <img src="../../static/message.png">
                        <div class="b1">消息</div>
                        <div class="b2">8888</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="center2">
                    <div class="container3">
                        <img src="../../static/coin.png">
                        <div class="c1">交易量</div>
                        <div class="c2">88888元</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="right">
                    <div class="container4">
                        <img src="../../static/cart.png">
                        <div class="d1">购买量</div>
                        <div class="d2">9999</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="40" style="margin-top:50px;">
            <el-col :span="10">
                <el-card>
                    <!-- <div id="line1" style="width:600px;height:400px;">1</div> -->
                    <div id="line1" style="width: 600px;height:400px;"></div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card>
                    <div id="line2" style="width: 600px;height:400px;"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="40" style="margin-top:30px;">
            <el-col :span="10">
                <el-card>
                    <el-progress :percentage="80" status="success"></el-progress>
                    <el-progress :percentage="75" status="success" :format="format"></el-progress>
                    <el-progress :percentage="60" status="warning"></el-progress>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
// import echarts from '../assets/echarts.min.js'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    // name: 'Main'
    data(){
        return {

        }
    },
    mounted () {
        this.drawLines1();
        this.drawLines2();
    },
    methods:{
        format(percentage) {
            return percentage === 100 ? '满' : `${percentage}%`;
        },
        drawLines1(){
            var myChart = echarts.init(document.getElementById('line1'));
            var option = {
                title: {
                    text: '最近一周各品类销售图'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["台式","笔记本","手机","厨具","衣裤","矿泉水"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };
            myChart.setOption(option);
        },
        drawLines2(){
            var myChart2 = echarts.init(document.getElementById('line2'));
            var option2 = {
                title: {
                    text: '最近几个月成交量'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["台式","笔记本","手机","厨具","衣裤","矿泉水"]
                },
                yAxis: {
                    
                },
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [16, 50, 12, 4, 18, 40]
                }]
            };
            myChart2.setOption(option2);
        }
    }
}
</script>
<style scoped>
    .main{
        margin-top:70px;
        margin-left:250px;
    }
    .line1{
        width:622px;height:160px;
    }
    .all{
        margin-top:20px;
    }
    .left{
        line-height: 60px;
        width: 377px;
        position: relative;
    }
    .left img{
        position: absolute;
        left:5%;
    }
    .left .a1{
        position: absolute;
        top:0;
        left:80%;
        color: #ccc;
    }
    .left .a2{
        position: relative;
        left:40%;
        top:20px;
        font-weight: bold;
        color: royalblue;
    }
    /****/
    .center{
        line-height: 60px;
        width: 377px;
        position: relative;
    }
    .center img{
        position: absolute;
        left:5%;
    }
    .center .b1{
        position: absolute;
        top:0;
        left:80%;
        color: #ccc;
    }
    .center .b2{
        position: relative;
        left:40%;
        top:20px;
        font-weight: bold;
        color: royalblue;
    }
    /****/
    .center2{
        line-height: 60px;
        width: 377px;
        position: relative;
    }
    .center2 img{
        position: absolute;
        left:5%;
    }
    .center2 .c1{
        position: absolute;
        top:0;
        left:80%;
        color: #ccc;
    }
    .center2 .c2{
        position: relative;
        left:40%;
        top:20px;
        font-weight: bold;
        color: royalblue;
    }
    /****/
    .right{
        line-height: 60px;
        width: 377px;
        position: relative;
    }
    .right img{
        position: absolute;
        left:5%;
    }
    .right .d1{
        position: absolute;
        top:0;
        left:80%;
        color: #ccc;
    }
    .right .d2{
        position: relative;
        left:40%;
        top:20px;
        font-weight: bold;
        color: royalblue;
    }
</style>