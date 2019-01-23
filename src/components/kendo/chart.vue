<template>
	<div>
		<h3>(1)图表chart</h3>
		<Chart :title-text="'kendo Chart Example'"
			   :series='series'
			   :seriesColors='seriesColors'
			   :category-axis-categories='categories'
			   :theme="'sass'"
			   :chartArea='chartArea'
			   :series-defaults='seriesDefaults'
			   :value-axis="axis"
			   >
			   <!--title-text标题，series图标系列的配置，seriesColors图标颜色，chartArea配置图标区域-->
			   <!--theme主题可以是内置主题，也可以是sass主题。 当主题设置为sass时，图表将从基于SASS的主题中读取变量。-->
       </Chart>
        <h3>(3)曲线图chart</h3>
        <Chart :title-text="'Gross domestic product growth/GDP annual %/'"
        	   :series='series3'
        	   :category-axis-categories='categories3'
        	   :series-defaults-type="'area'"
			   
        	   :legend-position="'bottom'"
        	   >
			<!--series-defaults-type为数据显示类型-->
        </Chart>
        <h3>(4)饼状图</h3>
        <Sparkline id="stats-wed"
      
                   :type="'pie'"
                   :data="[4,8,16]"
                   :theme="'sass'">
        	
        </Sparkline>
        <h3>(5)布局panel</h3>
        <PanelBar>
        	<li>Baseball
        		<ul>
	        		<li>Top News</li>
	        		<li>Radio Records</li>
	        	</ul>
        	</li>
        	<li>Golf
        		<ul>
        			<li>Top News</li>
        			<li>Radio Records</li>
        		</ul>
        	</li>
        </PanelBar>
	</div>
</template>

<script>
	
	import {Chart,
			ChartSeriesItem,
			Sparkline,
			SparklineSeriesItem,
			StockChart,
			ChartInstaller}from '@progress/kendo-charts-vue-wrapper';
	import {PanelBar} from '@progress/kendo-layout-vue-wrapper';
	export default{
		components:{
			Chart,
			Sparkline,
			StockChart,
			PanelBar,
		},
		data(){
			return{
				
	            //柱状图分类名
	            series: [{
	                name: 'temperature',
	                data: [10, 30, 12, 50],
	                axis:"temperature"
	            },
	            {
	                name: 'humidity',
	                data: [10, 25, 45, 73],
	                axis:"humidity"
	            }],
	            axis:[{//定义纵轴数值单位
	            	name:'temperature',
	            	labels:{
	            		format:"{0}c"
	            	}
	            },{
	            	name:'humidity',
	            	labels:{
	            		format:"{0}%"
	            	}
	            }],
	            seriesColors:['green','blue'],
	            chartArea:{width:'1000px'},
				categories:[2000,2001,2002,2003],
				
				series3:[{
					name:'India',
					data:[3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
				},{
					name: "Russian Federation",
                    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]

				},{
					 name: "Germany",
                     data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]

				},{
					name: "World",
                    data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
				}],
				categories3:[2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
				seriesDefaults:{
					border:{
						color:'red',
						width:2
					},
					bubble: {
				      color: "green",
				      opacity: 0.5
				   },
					labels: {
					      visible: true,
					      background: "yellow",
						  border: {
						    width: 1,
						    color: "black"
						  }
					},
					line:{
						color:'blue',
						opacity:0.5
					}
				},
			}
		},
		methods:{
	    }
	}
</script>

<style>
	#stats-wed {
        display: block;
        width: 200px;
        line-height: 100px;
    }

</style>