<template>
	<ul v-if="notes.length > 0">
		<note-item
			v-for="note in notes"
			:note="note"
			:key="note.id"
			@delete="$emit('delete', note)"
		/>
	</ul>
	<h1 v-else>ПУСТОЙ СПИСОК!</h1>
</template>
<script lang="ts">
import NoteItem from './NoteItem.vue';
export default {
	components: { NoteItem },
	props: {
		notes: {
			type: Array,
			required: true,
		},
	},
	mounted() {
		alert('Hello нафиг.');
	},
};
</script>
