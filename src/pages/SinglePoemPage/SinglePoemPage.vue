<template>
	<ui-card class="singlePoemCard">
		<ui-header :size="2">{{ poem.title }}</ui-header>
		<div v-if="poem.body" class="poemSubject">
			<ui-text>
				<span v-html="poem.body.replaceAll('\\n', '<br/>')"></span>
			</ui-text>
			<share-block :name="poem.title" />
			<comment-block />
		</div>
	</ui-card>
</template>
<script lang="ts">
import poems from '@/data/poems.json';
import ShareBlock from './ShareBlock.vue';
import CommentBlock from './CommentBlock.vue';
import { defineComponent } from 'vue';
import { IPoem } from '@/types/index';
export default defineComponent({
	components: { ShareBlock, CommentBlock },
	data() {
		return {
			poem: <IPoem>{},
		};
	},
	mounted() {
		let queryId = Number(this.$route.params.id),
			poem = poems.find((x) => x.id === queryId);
		if (poem) this.poem = poem;
		else this.$router.push('/404');
	},
});
</script>
<style>
.singlePoemCard {
	margin: 0 auto;
}
.poemSubject {
	margin-top: 20px;
}
</style>
