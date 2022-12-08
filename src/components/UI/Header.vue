<template>
	<div>
		<h1
			v-if="size === 1"
			class="defaultHeader"
			:class="{ elipsHeader: elipsHeader }"
		>
			<slot></slot>
		</h1>
		<h2
			v-if="size === 2"
			class="defaultHeader"
			:class="{ elipsHeader: elipsHeader }"
		>
			<slot></slot>
		</h2>
		<h3
			v-if="size === 3"
			class="defaultHeader"
			:class="{ elipsHeader: elipsHeader }"
		>
			<slot></slot>
		</h3>
		<h4
			v-if="size === 4"
			class="defaultHeader"
			:class="{ elipsHeader: elipsHeader }"
		>
			<slot></slot>
		</h4>
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
		elipsHeader: {
			type: Boolean,
			required: false,
			default: false,
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

.elipsHeader {
	white-space: nowrap;
	overflow: hidden;
	width: 100%;
	text-overflow: ellipsis;
}
</style>
