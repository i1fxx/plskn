<template>
	<nav-bar :windowWidth="windowWidth" />
	<div class="routerBlock">
		<router-view :windowWidth="windowWidth"></router-view>
	</div>
	<footer-block />
</template>
<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import { defineComponent } from 'vue';
export default defineComponent({
	components: {
		NavBar,
		FooterBlock,
	},
	data() {
		return {
			windowWidth: window.innerWidth,
		};
	},
	methods: {
		handleWindowResize(event) {
			this.windowWidth = event.currentTarget.innerWidth;
		},
	},
	beforeDestroy: function () {
		window.removeEventListener('resize', this.handleWindowResize);
	},
	mounted() {
		window.addEventListener('resize', this.handleWindowResize);
	},
});
</script>
