<template>
	<div class="poemList">
		<poem-list :poems="poemList" />
	</div>
</template>
<script lang="ts">
import PoemList from '@/components/PoemList.vue';
import poems from '@/data/poems.json';
import { IPoem } from '@/types/index';
export default {
	components: {
		PoemList,
	},
	data() {
		return {
			poemList: <IPoem[]>poems,
		};
	},
};
</script>
<style>
.poemList {
	max-width: 550px;
	margin: 0 auto;
	padding: 10px;
}
</style>
