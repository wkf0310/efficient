<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
.login-box {
	.el-input__inner {
		border-radius: 14px !important;
	}
}
.el-icon-arrow-down:before {
	color: #fff;
	font-size: 15px;
}
* {
	margin: 0;
	padding: 0;
	list-style: none;
	box-sizing: border-box;
}
html,
body,
#app {
	width: 100%;
	height: 100%;
}
</style>
