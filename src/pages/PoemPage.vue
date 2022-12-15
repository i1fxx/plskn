<template>
	<div class="poemList">
		<poem-list :poems="this.$poemsList" />
	</div>
</template>
<script lang="ts">
import PoemList from '@/components/PoemList.vue';
export default {
	components: {
		PoemList,
	},
	data() {
		return {};
	},
};
</script>
<style>
.poemList {
	max-width: 550px;
	margin: 0 auto;
}
</style>
