<template>
	<div>
		<form @submit.prevent>
			<ui-text-input
				v-model="note.title"
				type="text"
				placeholder="Заголовок записи"
			/><br />
			<ui-text-input
				v-model="note.body"
				type="text"
				placeholder="Суть записи"
			/><br />
			<ui-button @click="createNote">Submit</ui-button>
		</form>
	</div>
</template>
<script lang="ts">
import { INote } from '@/types/index';
export default {
	data() {
		return {
			note: <INote>{
				id: 0,
				title: '',
				body: '',
			},
		};
	},

	methods: {
		createNote(): void {
			/*this.note.id = Date.now();
			this.$emit('create', this.note);
			this.note = {
				id: 0,
				title: '',
				body: '',
			};*/
		},
	},
};
</script>
