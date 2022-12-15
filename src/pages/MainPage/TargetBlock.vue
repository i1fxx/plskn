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
import { defineComponent } from 'vue';
export default defineComponent({
	components: {
		ArrowNarrowDownIcon,
	},
	data() {
		return {
			scrolledMark: false,
		};
	},
	mounted() {
		setTimeout(() => {
			if (window?.top?.scrollY === 0 && !this.scrolledMark) {
				let elem: any = document.getElementById('arrowButton');
				if (elem) elem.classList.add('targetArrow');
			}
		}, 10000);
	},
	methods: {
		handleScroll() {
			if (window?.top?.scrollY && window?.top?.scrollY > 0)
				this.scrolledMark = true;
		},
	},
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
});
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
	background-image: url('@/assets/images/targetBackgroundBlue.jpg');
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
