<template>
	<div>
		<h1 v-if="size === 1" class="defaultHeader">
			<slot></slot>
		</h1>
		<h2 v-if="size === 2" class="defaultHeader"><slot></slot></h2>
		<h3 v-if="size === 3" class="defaultHeader"><slot></slot></h3>
		<h4 v-if="size === 4" class="defaultHeader"><slot></slot></h4>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'ui-header',
	props: {
		size: {
			type: Number,
			required: true,
			default: 2,
		},
	},
});
</script>
<style scoped>
.defaultHeader {
	font-family: 'Montserrat';
	font-weight: 600;
	display: inline-block;
	vertical-align: middle;
}
</style>
