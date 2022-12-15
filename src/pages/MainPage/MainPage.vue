<template>
	<target-block @nextBlock="nextBlockHandler" />
	<about-block id="mainAbout" class="mainAbout" :windowWidth="windowWidth" />
	<last-poems :poems="splicePoems" />
</template>
<script lang="ts">
import TargetBlock from './TargetBlock.vue';
import AboutBlock from './AboutBlock.vue';
import LastPoems from './LastPoems.vue';
import { IPoem } from '@/types/index';
import { defineComponent } from 'vue';
import poems from '@/data/poems.json';
export default defineComponent({
	components: { TargetBlock, AboutBlock, LastPoems },
	props: {
		windowWidth: {
			type: Number,
			required: true,
		},
	},
	setup() {},
	data() {
		return {
			splicePoems: <IPoem[]>[],
		};
	},
	mounted() {
		this.splicePoems = this.$poemsList.slice(0, 3);;
	},
	watch: {},
	methods: {
		nextBlockHandler() {
			let elem: any = document.getElementById('mainAbout'),
				yOffset = -45,
				y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		},
	},
});
</script>
<style></style>
