<template>
	<ui-card class="poemItem">
		<ui-header :size="4" class="poemTitle">{{ poem.title }}</ui-header>
		<ui-text class="poemAdded">
			{{ getDate(poem.add_date) }}
		</ui-text>
	</ui-card>
</template>
<script lang="ts">
const { DateTime } = require('luxon');
export default {
	props: {
		poem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getDate(date: String) {
			return DateTime.fromISO(date).toRelative();
		},
	},
};
</script>
<style scoped>
.poemAdded {
	display: inline-block !important;
	float: right;
	color: #767777;
}
.poemItem {
	margin: 20px auto;
	text-align: left;
}
</style>
