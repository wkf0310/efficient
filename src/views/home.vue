<template>
	<div>
		<!-- 首页 -->
		<!-- 待办事项 -->
		<div class="box">
			<!-- 待办事项 -->
			<div class="matter">
				<ul>
					<li>
						<p>待办事项</p>
						<p>查看更多</p>
					</li>
					<li v-for="(item, index) in 3" :key="index">
						<p>[待办事项] <span>你申请的报销还未审批，请及时查看，防止过期</span></p>
						<p>2022年8月</p>
					</li>
					<p class="last-li">暂无待办事</p>
				</ul>
				<div class="block">
					<el-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周"> </el-date-picker>
				</div>
			</div>
			<!-- 员工数据 -->
			<div class="staff">
				<ul class="u1">
					<p class="p">员工数据</p>
					<li class="li1">
						<div class="left">
							<p>员工总人数</p>
							<p>200人</p>
						</div>
						<div class="center">
							<p>员工总人数</p>
							<p>200人</p>
						</div>
						<div class="right">
							<p>员工总人数</p>
							<p>200人</p>
						</div>
					</li>
					<li>
						<div class="left">
							<p>员工总人数</p>
							<p>200人</p>
						</div>
						<div class="center">
							<p>员工总人数</p>
							<p>200人</p>
						</div>
						<div class="right">
							<p>员工总人数</p>
							<p>200人</p>
						</div>
					</li>
				</ul>
				<ul class="u2">
					<p class="p">员工数据</p>
					<div id="pie"></div>
				</ul>
			</div>
			<footer>
				<span>员工生日</span>
				<div id="columnar"></div>
			</footer>
		</div>
	</div>
</template>

<script>
import * as echarts from 'echarts'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: '',
	components: {},
	data() {
		return {
			value1: ''
		}
	},
	created() {},
	mounted() {
		// 饼状图
		var chartDom = document.getElementById('pie')
		var myChart = echarts.init(chartDom)
		var option

		option = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				left: 'right',
				padding: 40
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: '70%',
					data: [
						{ value: 1048, name: '东北' },
						{ value: 735, name: '内蒙' },
						{ value: 580, name: '河北' },
						{ value: 484, name: '山西' },
						{ value: 300, name: '河南' }
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					center: ['30%', '50%']
				}
			]
		}
		option && myChart.setOption(option)
		// 柱形图
		var chartDoms = document.getElementById('columnar')
		var myCharts = echarts.init(chartDoms)
		var options

		options = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					axisTick: {
						alignWithLabel: true
					}
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: 'birthday',
					type: 'bar',
					barWidth: '40%',
					data: [10, 52, 200, 334, 390, 330, 220, 200, 110, 500, 12, 10],
					itemStyle: {
						color: '#b886f8'
					}
				}
			]
		}

		options && myCharts.setOption(options)
	},
	methods: {}
}
</script>
<style scoped lang="scss">
.box {
	padding: 20px;
	.matter {
		display: flex;

		.block {
			margin-left: 20px;
			.el-picker-panel {
				height: 282px !important;
			}
		}
		ul {
			width: 65%;
			border: 1px solid #dcdfe6;
			li:nth-child(1) {
				height: 50px;
				line-height: 50px;
				p {
					margin: 0 15px 0 15px;
				}
				p:nth-child(1) {
					font-size: 20px;
				}
				p:nth-child(2) {
					color: #39f;
				}
			}
			li {
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #dcdfe6;
				height: 40px;
				line-height: 40px;
				p {
					margin: 0 15px 0 15px;
				}
				// border-bottom: 0;
			}
			.last-li {
				text-align: center !important;
				height: 40px;
				line-height: 40px;
			}
		}
	}
	.staff {
		display: flex;
		margin-top: 20px;
		justify-content: space-between;
		.u1 {
			width: 49%;
			border: 1px solid #dcdfe6;
			.li1 {
				margin-top: 35px;
			}
			.p {
				height: 50px;
				line-height: 50px;
				border-bottom: 1px solid #dcdfe6;
				padding: 0 20px;
				font-size: 20px;
			}
			li {
				display: flex;
				// justify-content: space-between;
				text-align: center;
				height: 80px;
				padding: 10px;
				.left {
					flex: 1;
					text-align: center;
					border-right: 1px solid #dcdfe6;
					p:nth-child(1) {
						margin-top: 8px;
					}
				}
				.center {
					flex: 1;
					text-align: center;
					border-right: 1px solid #dcdfe6;
					p:nth-child(1) {
						margin-top: 8px;
					}
				}
				.right {
					flex: 1;
					text-align: center;
					p:nth-child(1) {
						margin-top: 8px;
					}
				}
			}
		}
		.u2 {
			width: 49%;
			border: 1px solid #dcdfe6;
			.p {
				font-size: 20px;
				padding: 0 20px;
				border-bottom: 1px solid #dcdfe6;
				height: 50px;
				line-height: 50px;
			}
			#pie {
				width: 100%;
				height: 100%;
			}
		}
	}
	footer {
		position: relative;
		border: 1px solid #dcdfe6;
		margin-top: 20px;
		span {
			display: inline-block;
			position: absolute;
			top: 10px;
			left: 20px;

			font-size: 20px;
		}
		#columnar {
			height: 200px;
		}
	}
}
</style>
