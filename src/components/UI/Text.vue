<template>
	<span class="defaultText">
		<slot></slot>
	</span>
</template>
<script lang="ts">
export default {
	name: 'ui-text',
	props: {
		float: {
			type: String,
			required: false,
		},
	},
};
</script>
<style scoped>
.defaultText {
	font-family: 'Montserrat';
	font-size: 0.85rem;
}
</style>
