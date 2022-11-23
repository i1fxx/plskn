<template>
	<li class="note">
		<strong>{{ note.title }}</strong>
		<p>{{ note.body }}</p>
		<ui-button @click="$emit('delete', note)">Удалить</ui-button>
	</li>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: {
		note: {
			type: Object,
			required: true,
		},
	},
	methods: {},
});
</script>
<style scoped>
.note {
	margin: 15px;
	border: 2px solid black;
}
</style>
