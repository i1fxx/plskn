<template>
	<span
		:class="{
			regularText: type === 'regular',
			lightText: type === 'light',
			serifText: type === 'serif',
			text: true,
		}"
	>
		<slot></slot>
	</span>
</template>
<script lang="ts">
export default {
	name: 'ui-text',
	props: {
		type: {
			type: String,
			required: false,
			default: 'regular',
		},
	},
};
</script>
<style scoped>
.text {
	font-size: 0.85rem;
}
.lightText {
	font-family: 'MontserratLight';
}
.regularText {
	font-family: 'MontserratRegular';
}
.serifText {
	font-family: 'MerriweatherRegular';
}
</style>
