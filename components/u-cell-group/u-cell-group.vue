<template>
	<div class="u-cell-box">
		<div class="u-cell-title" v-if="title" :style="[titleStyle]">
			{{title}}
		</div>
		<div class="u-cell-item-box" :class="{'u-border-bottom u-border-top': border}">
			<slot />
		</div>
	</div>
</template>

<script>
	/**
	 * cellGroup 单元格父组件Group
	 * @description cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。搭配u-cell-item
	 * @tutorial https://www.uviewui.com/components/cell.html
	 * @property {String} title 分组标题
	 * @property {Boolean} border 是否显示外边框（默认true）
	 * @property {Object} title-style 分组标题的的样式，对象形式，如{'font-size': '24px'} 或 {'fontSize': '24px'}
	 * @example <u-cell-group title="设置喜好">
	 */
	export default {
		name: "u-cell-group",
		props: {
			// 分组标题
			title: {
				type: String,
				default: ''
			},
			// 是否显示分组list上下边框
			border: {
				type: Boolean,
				default: true
			},
			// 分组标题的样式，对象形式，注意驼峰属性写法
			// 类似 {'font-size': '24px'} 和 {'fontSize': '24px'}
			titleStyle: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		data() {
			return {
				index: 0,
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.u-cell-box {
		width: 100%;
	}

	.u-cell-title {
		padding: 30px 32px 10px 32px;
		font-size: 30px;
		text-align: left;
		color: $u-tips-color;
	}

	.u-cell-item-box {
		background-color: #FFFFFF;
		flex-direction: row;
	}
</style>
