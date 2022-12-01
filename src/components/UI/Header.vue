<template>
	<h1 v-if="size === 1" class="defaultHeader"><slot></slot></h1>
	<h2 v-if="size === 2" class="defaultHeader"><slot></slot></h2>
	<h3 v-if="size === 3" class="defaultHeader"><slot></slot></h3>
	<h4 v-if="size === 4" class="defaultHeader"><slot></slot></h4>
</template>
<script lang="ts">
export default {
	name: 'ui-header',
	props: {
		size: {
			type: Number,
			required: true,
			default: 2,
		},
	},
};
</script>
<style scoped>
.defaultHeader {
	font-family: 'Montserrat';
	font-weight: 600;
	display: inline-block;
	color: black;
}
</style>
