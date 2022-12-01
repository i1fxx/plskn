<template>
	<target-block
		ref="targetBlock"
		class="mainTarget"
		@nextBlock="nextBlockHandler"
	/>
	<about-block id="mainAbout" v-show="true" class="mainAbout" />
	<transition name="slide-fade"> </transition>
	<last-poems :poems="splicePoems" />
</template>
<script lang="ts">
import TargetBlock from './TargetBlock.vue';
import AboutBlock from './AboutBlock.vue';
import LastPoems from './LastPoems.vue';
import { IPoem } from '@/types/index';
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import poems from '@/data/poems.json';
export default defineComponent({
	components: { TargetBlock, AboutBlock, LastPoems },
	setup() {
		let targetBlock = ref(null),
			targetIsVisible = useElementVisibility(targetBlock);

		return {
			targetBlock,
			targetIsVisible,
		};
	},
	data() {
		return {
			splicePoems: <IPoem[]>[],
		};
	},
	mounted() {
		let buffer = poems.sort((a, b) => {
			return new Date(b.add_date).getTime() - new Date(a.add_date).getTime();
		});
		buffer = buffer.slice(0, 3);
		this.splicePoems = buffer;
	},
	watch: {
		targetIsVisible: {
			handler() {
				this.$emit('targetView', this.targetIsVisible);
			},
		},
	},
	methods: {
		nextBlockHandler() {
			let elem: any = document.getElementById('mainAbout');
			elem.scrollIntoView({
				behavior: 'smooth',
			});
		},
	},
});
</script>
<style></style>
