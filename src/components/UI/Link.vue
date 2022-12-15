<template>
	<router-link :to="to" class="linkText">
		<slot></slot>
	</router-link>
</template>
<script lang="ts">
export default {
	name: 'ui-link',
	props: {
		to: {
			type: String,
			required: true,
		},
	},
};
</script>
<style scoped>
.linkText {
	font-family: 'MontserratRegular';
	font-size: 0.85rem;
	text-decoration: none;
	color: #0044cc;
}
</style>
