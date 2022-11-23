<template>
	<button class="btn" :class="{ linkButton: type === 'link' }">
		<router-link to="/">
			<slot></slot>
		</router-link>
	</button>
</template>
<script lang="ts">
export default {
	name: 'ui-button',
	props: {
		to: {
			type: String,
			required: false,
		},
		type: { type: String, required: true }, //type : link, primary, secondary
	},
};
</script>
<style scoped>
.btn {
	margin: 10px;
	padding: 8px;
	font-size: 0.85rem;
	font-weight: bold;
	cursor: pointer;
}
.linkButton {
	border: none;
	background: none;
}
.linkButton > a {
	text-decoration: none;
	color: black;
}
.linkButton > a:hover {
	border-bottom: 2.2px solid black;
}
</style>
