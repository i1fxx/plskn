<template>
	<div class="targetBlockMain">
		<div class="targetActivePath">
			<ui-button id="arrowButton" type="icon" @click="this.$emit('nextBlock')">
				<arrow-narrow-down-icon size="35" />
			</ui-button>
		</div>
	</div>
</template>
<script lang="ts">
import { ArrowNarrowDownIcon } from 'vue-tabler-icons';
export default {
	components: {
		ArrowNarrowDownIcon,
	},
	data() {
		return {};
	},
	mounted() {
		setTimeout(() => {
			if (document.body.scrollTop === 0) {
				let elem: any = document.getElementById('arrowButton');
				if (elem) elem.classList.add('targetArrow');
			}
		}, 10000);
	},
};
</script>
<style scoped>
.targetArrow {
	transform-origin: bottom;
	animation-name: bounce;
	animation-timing-function: ease;
	animation-duration: 2s;
	animation-iteration-count: 3;
}
.targetBlockMain {
	background-image: url('@/assets/images/logo.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	width: 100%;
	height: calc(100vh - 100px);
}
.targetActivePath {
	width: 100%;
	position: absolute;
	bottom: 0px;
	left: 0;
	right: 0;
	text-align: center;
}
</style>
