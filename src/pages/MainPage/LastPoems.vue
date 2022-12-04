<template>
	<div class="lastPoems">
		<ui-header :size="2">Последние публикации</ui-header>
		<poem-list :poems="poems"></poem-list>

		<ui-link :to="'/poem'" v-if="poems.length === 3"
			>Остальные стихотворения</ui-link
		>
	</div>
</template>
<script lang="ts">
import PoemList from '@/components/PoemList.vue';
export default {
	components: { PoemList },
	props: {
		poems: {
			type: Array,
			required: true,
		},
	},
};
</script>
<style scoped>
.lastPoems {
	text-align: center;
	width: 100%;
	margin: 20px 0;
}
</style>
