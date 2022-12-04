<template>
	<div class="defaultCard">
		<slot></slot>
	</div>
</template>
<script lang="ts">
export default {
	name: 'ui-card',
	props: {},
};
</script>
<style scoped>
.defaultCard {
	width: 100%;
	max-width: 350px;
	border-radius: 6.5px;
	background-color: #f5f3f2;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	padding: 10px;
}
</style>
