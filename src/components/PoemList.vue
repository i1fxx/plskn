<template>
	<ul class="poemsList">
		<li v-for="poem of poems">
			<router-link :to="'/poem/' + poem.id">
				<poem-item :poem="poem"></poem-item>
			</router-link>
		</li>
	</ul>
</template>
<script lang="ts">
import PoemItem from '@/components/PoemItem.vue';
export default {
	components: { PoemItem },
	props: {
		poems: {
			type: Array,
			required: true,
		},
	},
	setup(props) {},
};
</script>
<style scoped>
.poemsList {
	margin: 0 auto;
	max-width: 450px;
	list-style: none;
}
</style>
