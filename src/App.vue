<template>
	<nav-bar />
	<router-view></router-view>
	<footer-block />
</template>
<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import { INote } from '@/types/index';
import { defineComponent } from 'vue';
export default defineComponent({
	components: {
		NavBar,
		FooterBlock,
	},
	data() {
		return {
			notes: <INote[]>[
				{ id: 1, title: 'Hello world!', body: 'Something' },
				{ id: 2, title: 'Hello world! 1', body: 'Something 1' },
				{ id: 3, title: 'Hello world! 2', body: 'Something 2' },
			],
		};
	},
	methods: {
		newNote(note: INote) {
			this.notes.push(note);
		},
		deleteNote(note: INote) {
			let removeIndex = this.notes.findIndex((x) => x.id === note.id);
			if (removeIndex != -1) this.notes.splice(removeIndex, 1);
		},
	},
	mounted() {},
});
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
